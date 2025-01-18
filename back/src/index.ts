import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import contact from './routes/contact';
import dotenv from 'dotenv';
import { transporter } from './config/nodemailes';

const app = express();
dotenv.config();
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
console.log('EMAIL_RECEIVER:', process.env.EMAIL_RECEIVER);

// Configuración de CORS
app.use(
  cors({
    origin: 'http://localhost:3000', // Tu frontend URL
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  }),
);

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Ruta
app.use('/api/contact', contact);

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error en la configuración del transportador:', error);
  } else {
    console.log('Transportador configurado correctamente');
  }
});
