import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import Logger from 'bunyan';
import sendGridMail from '@sendgrid/mail';
import { config } from '@root/config';
import { BadRequestError } from '@global/helpers/error-handler';

interface IMailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

const log: Logger = config.createLogger('mailOptions');

sendGridMail.setApiKey(config.SENDGRID_API_KEY!);

class MailSransport {
  public async sendMail(receiverEmail: string, subject: string, body: string): Promise<void> {
    if (config.NODE_ENV === 'development' || config.NODE_ENV === 'test') {
      await this.developmentEmailSender(receiverEmail, subject, body);
    } else {
      await this.productionEmailSender(receiverEmail, subject, body);
    }
  }

  private async developmentEmailSender(receiverEmail: string, subject: string, body: string): Promise<void> {
    const transporter: Mail = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: config.SENDER_EMAIL,
        pass: config.SENDER_EMAIL_PASSWORD
      }
    });

    const mailOptions: IMailOptions = {
      from: `"Chat App" <${config.SENDER_EMAIL}>`, // sender address
      to: receiverEmail, // list of receivers
      subject: subject, // Subject line
      html: body // html body
    };

    try {
      await transporter.sendMail(mailOptions);
      log.info('Devolopment email sent successfully');
    } catch (error) {
      log.error('Error while sending email', error);
      throw new BadRequestError('Error while sending email');
    }
  }

  private async productionEmailSender(receiverEmail: string, subject: string, body: string): Promise<void> {
    const mailOptions: IMailOptions = {
      from: `"Chat App" <${config.SENDER_EMAIL}>`, // sender address
      to: receiverEmail, // list of receivers
      subject: subject, // Subject line
      html: body // html body
    };

    try {
      await sendGridMail.send(mailOptions);
      log.info('Production email sent successfully');
    } catch (error) {
      log.error('Error while sending email', error);
      throw new BadRequestError('Error while sending email');
    }
  }
}

export const mailTransport: MailSransport = new MailSransport();
