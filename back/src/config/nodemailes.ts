import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = (name: string, email: string, message: string) => ({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_RECEIVER,
  replyTo: email,
  subject: `Nuevo mensaje de ${name}`,
  html: `<p><strong>Nombre:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Mensaje:</strong> ${message}</p>`,
});
