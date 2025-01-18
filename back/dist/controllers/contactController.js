"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmail = void 0;
const nodemailes_1 = require("../config/nodemailes");
const sendContactEmail = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        await nodemailes_1.transporter.sendMail((0, nodemailes_1.mailOptions)(name, email, message));
        res.status(200).json({ message: 'Mensaje enviado con Éxito!' });
    }
    catch (error) {
        console.error('Error al enviar el mail:', error);
        res.status(500).json({ message: 'Error enviando el mensaje' });
    }
};
exports.sendContactEmail = sendContactEmail;
