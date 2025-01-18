"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailOptions = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
const mailOptions = (name, email, message) => ({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    replyTo: email,
    subjet: `Nuevo mensaje de ${name}`,
    html: `<p><strong>Nombre:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Mensaje:</strong> ${message}</p>`,
});
exports.mailOptions = mailOptions;
