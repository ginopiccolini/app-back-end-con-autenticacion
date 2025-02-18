const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Verificar la carga de la variable de entorno
console.log('MONGO_URI:', process.env.MONGO_URI);

// Cadena de conexión desde el archivo .env
const mongoURI = process.env.MONGO_URI;

// Conectar a MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

// Exportar la conexión
module.exports = mongoose;
