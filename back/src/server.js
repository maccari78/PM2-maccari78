// PM2-maccari78/back/src/server.js

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const movieRouter = require('./routes/movieRouter');

const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor!');
});

app.use('/movies', movieRouter);

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error de conexión a MongoDB Atlas:', error);
  }
}

connectToDatabase().catch(error => {
  console.error('Error al conectar con la base de datos:', error);
  process.exit(1);
});
