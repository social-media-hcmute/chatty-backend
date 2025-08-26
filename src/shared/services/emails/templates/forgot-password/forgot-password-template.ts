import fs from 'fs';
import ejs from 'ejs';

class ForgotPasswordTemplate {
  public passwordResetTemplate(username: string, resetLink: string): string {
    const template = fs.readFileSync(__dirname + '/forgot-password-template.ejs', 'utf-8');
    return ejs.render(template, { username, resetLink, image_url: 'https://img.icons8.com/?size=100&id=49108&format=png&color=000000' });
  }
}

export const forgotPasswordTemplate: ForgotPasswordTemplate = new ForgotPasswordTemplate();
