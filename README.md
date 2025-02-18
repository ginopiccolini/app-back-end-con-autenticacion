App Back-End con Autenticación
Este proyecto es una aplicación de back-end que incluye autenticación de usuarios utilizando Node.js, Express, MongoDB y JWT.

Requisitos
Node.js

MongoDB (local o Atlas)

Postman (para pruebas)

Instalación
Clona el repositorio desde GitHub.

Navega al directorio del proyecto.

Instala las dependencias usando npm.

Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno:

PORT: Puerto en el que correrá el servidor (por ejemplo, 5000)

MONGO_URI: Cadena de conexión a MongoDB

JWT_SECRET: Clave secreta para la generación de tokens JWT

Ejecución
Para iniciar el servidor, usa el comando de npm correspondiente. El servidor se ejecutará en http://localhost:<tu-puerto>.

Rutas de la API
Registro de Usuario
URL: /api/user/register

Método: POST

Descripción: Registra un nuevo usuario

Cuerpo:

name: Nombre del usuario

email: Correo electrónico del usuario

password: Contraseña del usuario

Respuesta:

Mensaje de éxito o error y los detalles del usuario registrado

Inicio de Sesión
URL: /api/user/login

Método: POST

Descripción: Inicia sesión de un usuario

Cuerpo:

email: Correo electrónico del usuario

password: Contraseña del usuario

Respuesta:

Mensaje de éxito o error y un token JWT si el inicio de sesión es exitoso

Verificación de Usuario
URL: /api/user/verify

Método: GET

Descripción: Verifica un usuario utilizando un token JWT

Encabezados:

Authorization: Bearer <token>

Respuesta:

Mensaje de éxito o error y los detalles del usuario verificado

Estructura del Proyecto
El proyecto sigue una estructura organizada en carpetas para una mejor mantenibilidad, incluyendo configuraciones, controladores, modelos y rutas.

Licencia
