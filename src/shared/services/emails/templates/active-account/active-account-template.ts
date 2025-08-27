import fs from 'fs';
import ejs from 'ejs';

class ActiveAccountTemplate {
  public activeAccountTemplate(username: string, resetLink: string): string {
    const template = fs.readFileSync(__dirname + '/active-account-template.ejs', 'utf-8');
    return ejs.render(template, { username, resetLink, image_url: 'https://img.icons8.com/?size=100&id=36725&format=png&color=000000' });
  }
}

export const activeAccountTemplate: ActiveAccountTemplate = new ActiveAccountTemplate();
