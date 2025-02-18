const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Opciones de configuración para swagger-jsdoc
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Autenticación',
    version: '1.0.0',
    description: 'Documentación de la API de Autenticación'
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Servidor local'
    }
  ]
};

const options = {
  swaggerDefinition,
  // Rutas a los archivos que contienen anotaciones de Swagger
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
