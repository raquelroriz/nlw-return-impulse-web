import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ced1f2e85d26f4",
      pass: "c50ed53ba76fc7"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData){ 
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Maria Raquel <mariaraquel.estudando@gmail.com>',
        subject,
        html: body,
    })
  };
}