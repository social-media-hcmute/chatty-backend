import fs from 'fs';
import ejs from 'ejs';
import { IResetPasswordParams } from '@user/interfaces/user.interface';

class ResetPasswordTemplate {
  public passwordResetConfirmationTemplate(templateParams : IResetPasswordParams): string {

    const {username, email, ipaddress, date} = templateParams;
    const template = fs.readFileSync(__dirname + '/reset-password-template.ejs', 'utf-8');
    return ejs.render(template, { username, email, ipaddress, date, image_url: 'https://img.icons8.com/?size=100&id=49108&format=png&color=000000' });
  }
}

export const resetPasswordTemplate: ResetPasswordTemplate = new ResetPasswordTemplate();
