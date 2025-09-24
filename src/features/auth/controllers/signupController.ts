import { ObjectId } from 'mongodb';

import { Request, Response } from 'express';
import { JoiValidation } from '@global/decorators/joi-validation.decorator';
import { signupSchema } from '@auth/schemes/signup';
import { authService } from '@service/db/auth-service';
import { IAuthDocument, ISignUpData } from '@auth/interfaces/auth.interface';
import { BadRequestError } from '@global/helpers/error-handler';
import { Helpers } from '@global/helpers/helpers';
import { UploadApiResponse } from 'cloudinary';
import { uploads } from '@global/helpers/cloudinary-upload';
import HTTP_STATUS from 'http-status-codes';
import { IUserDocument } from '@user/interfaces/user.interface';
import { UserCache } from '@service/redis/user.cache';
import { omit } from 'lodash';
import { authQueue } from '@service/queues/auth.queue';
import { userQueue } from '@service/queues/user.queue';
import JWT from 'jsonwebtoken';
import { config } from '@root/config';
import crypto from 'crypto';
import moment from 'moment';
import publicIP from 'ip';
import { resetPasswordTemplate } from '@service/emails/templates/reset-password/reset-password-template';
import { emailQueue } from '@service/queues/email.queue';
import { forgotPasswordTemplate } from '@service/emails/templates/forgot-password/forgot-password-template';
import Logger from 'bunyan';
import e from 'cors';
import { activeAccountTemplate } from '@service/emails/templates/active-account/active-account-template';

const userCache: UserCache = new UserCache();

const log: Logger = config.createLogger('SignUp');

export class SignUp {
  @JoiValidation(signupSchema)
  public async create(req: Request, res: Response): Promise<void> {
    const { username, password, email, avatarColor, avatarImage } = req.body;
    const checkIfUserExists: IAuthDocument = await authService.getUserByUsernameOrEmail(username, email);
    if (checkIfUserExists) {
      throw new BadRequestError('Invalid credentials');
    }

    const authObjectId: ObjectId = new ObjectId();
    const userObjectId: ObjectId = new ObjectId();
    const uId = `${Helpers.generateRandomInteger(12)}`;
    const randomBytes: Buffer = await Promise.resolve(crypto.randomBytes(20));
    const randomCharacters: string = randomBytes.toString('hex');
    const authData: any = await SignUp.prototype.signupData({
      _id: authObjectId,
      uId,
      username,
      email,
      password,
      avatarColor,
      emailActiveToken: randomCharacters,
      emailActiveExpires: Date.now() * 3600000
    });

    log.info(authData.emailActiveToken);
    log.info(authData.emailActiveExpires);
    const result: UploadApiResponse = (await uploads(avatarImage, `${userObjectId}`, true, true)) as UploadApiResponse;
    if (!result?.public_id) {
      throw new BadRequestError('File upload: Error occurred. Try again.');
    }

    // Add to redis cache
    const userDataForCache: IUserDocument = SignUp.prototype.userData(authData, userObjectId);
    userDataForCache.profilePicture = `https://res.cloudinary.com/dlduxwmjg/image/upload/v${result.version}/${userObjectId}`;
    await userCache.saveUserToCache(`${userObjectId}`, uId, userDataForCache);

    // Add to database
    //const userResult = omit(userDataForCache, ['uId', 'username', 'email', 'password', 'avatarColor']);
    authQueue.addAuthUserJob('addAuthUserToDB', { value: authData });
    userQueue.addUserJob('addUserToDB', { value: userDataForCache });



    const resetLink = `${config.CLIENT_URL}/activate?token=${randomCharacters}`;
    const template: string = activeAccountTemplate.activeAccountTemplate(username, resetLink);
    emailQueue.addEmailJob('forgotPasswordEmail', { template, receiverEmail: email, subject: 'Activate your account' });

    // const userJwt: string = SignUp.prototype.signToken(authData, userObjectId);
    // req.session = { jwt: userJwt };

    res.status(HTTP_STATUS.CREATED).json({
      message: 'User created successfully',
      user: userDataForCache
      //token: userJwt
    });
  }

  private signToken(data: IAuthDocument, userObjectId: ObjectId): string {
    return JWT.sign(
      {
        userId: userObjectId,
        uId: data.uId,
        email: data.email,
        username: data.username,
        avatarColor: data.avatarColor
      },
      config.JWT_TOKEN!
    );
  }

  private async signupData(data: any): Promise<IAuthDocument> {
    const { _id, username, email, password, uId, avatarColor, emailActiveToken, emailActiveExpires } = data;

    return {
      _id,
      uId,
      username: Helpers.firstLetterUpperCase(username),
      email,
      password,
      avatarColor,
      emailActiveToken,
      emailActiveExpires,
      createdAt: new Date()
    } as IAuthDocument;
  }

  private userData(data: IAuthDocument, userObjectId: ObjectId): IUserDocument {
    const { _id, uId, username, password, email, avatarColor, emailActiveToken, emailActiveExpires } = data;
    return {
      _id: userObjectId,
      authId: _id,
      uId,
      username: Helpers.firstLetterUpperCase(username),
      email,
      password,
      avatarColor,
      emailActiveToken,
      emailActiveExpires,
      profilePicture: '',
      blocked: [],
      blockedBy: [],
      work: '',
      location: '',
      school: '',
      quote: '',
      bgImageId: '',
      bgImageVersion: '',
      followersCount: 0,
      followingCount: 0,
      postsCount: 0,
      notifications: {
        messages: true,
        comments: true,
        reactions: true,
        follows: true
      },
      social: {
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: ''
      }
    } as unknown as IUserDocument;
  }

  public async activeAccount(req: Request, res: Response): Promise<void> {
    const { token } = req.params;
    const existingUser: IAuthDocument = await authService.getAuthUserByEmailActiveToken(token);

    if (!existingUser) {
      throw new BadRequestError('Reset token has expired');
    }

    existingUser.isActive = true;
    existingUser.emailActiveExpires = undefined;
    existingUser.emailActiveToken = undefined;
    await existingUser.save();

    // const templateParams: any = {
    //   username: existingUser.username!,
    //   email: existingUser.email!,
    //   ipaddress: publicIP.address(),
    //   date: moment().format('DD/MM/YYYY HH:mm')
    // };

    // const template: string = resetPasswordTemplate.passwordResetConfirmationTemplate(templateParams);
    // emailQueue.addEmailJob('forgotPasswordEmail', { template, receiverEmail: existingUser.email!, subject: 'Verification Email' });
    res.status(HTTP_STATUS.OK).json({
      message: 'Account is activated!'
    });
  }
}
