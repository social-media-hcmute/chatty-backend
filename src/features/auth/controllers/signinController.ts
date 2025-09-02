import { Request, Response } from 'express';
import { config } from '@root/config';
import HTTP_STATUS from 'http-status-codes';
import { authService } from '@service/db/auth-service';
import { JoiValidation } from '@global/decorators/joi-validation.decorator';
import { BadRequestError } from '@global/helpers/error-handler';
import { loginSchema } from '@auth/schemes/signin';
import { IAuthDocument } from '@auth/interfaces/auth.interface';
import JWT from 'jsonwebtoken';
import Logger from 'bunyan';
import { IResetPasswordParams, IUserDocument } from '@user/interfaces/user.interface';
import { userService } from '@service/db/user-service';
import { forgotPasswordTemplate } from '@service/emails/templates/forgot-password/forgot-password-template';
import { emailQueue } from '@service/queues/email.queue';
import moment from 'moment';
import publicIP from 'ip';
import { resetPasswordTemplate } from '@service/emails/templates/reset-password/reset-password-template';

const { hash, compare } = require('bcryptjs');

const log: Logger = config.createLogger('SignIn');

export class SignIn {
  @JoiValidation(loginSchema)
  public async read(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const existingUser: IAuthDocument = await authService.getAuthByUsername(username);

    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }
    const isPasswordMatch: boolean = await existingUser.comparePassword(password);

    if (!isPasswordMatch) {
      throw new BadRequestError('Invalid credentials');
    }

    if (!existingUser.isActive) {
      throw new BadRequestError('Please activate your account');
    }

    const user: IUserDocument = await userService.getUserByAuthId(`${existingUser._id}`);

    const userJwt: string = JWT.sign(
      {
        userId: existingUser._id,
        uId: existingUser.uId,
        email: existingUser.email,
        username: existingUser.username,
        avatarColor: existingUser.avatarColor
      },
      config.JWT_TOKEN!
    );

    req.session = {
      jwt: userJwt
    };

    const userDocument: IUserDocument = {
      ...user,
      authId: existingUser!._id,
      username: existingUser!.username,
      email: existingUser!.email,
      avatarColor: existingUser!.avatarColor,
      createdAt: existingUser!.createdAt,
      uId: existingUser!.uId
    } as IUserDocument;

    const templateParams: IResetPasswordParams = {
      username: existingUser.username!,
      email: existingUser.email!,
      ipaddress: publicIP.address(),
      date: moment().format('DD/MM/YYYY HH:mm')
    };

    res.status(HTTP_STATUS.OK).json({
      message: 'User login successfully',
      user: userDocument,
      token: userJwt
    });
  }
}
