import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import contactRoutes from './routes/contact';

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Ruta
app.use('/api/contact', contactRoutes);

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
