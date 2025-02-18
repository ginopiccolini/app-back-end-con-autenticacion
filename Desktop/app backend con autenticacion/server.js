const express = require('express');
const mongoose = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerSetup = require('./swagger');
const userRoutes = require('./routes/userRoutes'); // Importa las rutas de usuario

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configurar rutas
app.use('/api/user', userRoutes); // Usar las rutas de usuario

// Configurar Swagger
swaggerSetup(app);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
