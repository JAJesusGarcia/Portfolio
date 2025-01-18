import { Request, Response } from 'express';
import { transporter, mailOptions } from '../config/nodemailes';

export const sendContactEmail = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail(mailOptions(name, email, message));
    res.status(200).json({ message: 'Mensaje enviado con Éxito!' });
  } catch (error) {
    console.error('Error al enviar el mail:', error);
    res.status(500).json({ message: 'Error enviando el mensaje' });
  }
};
