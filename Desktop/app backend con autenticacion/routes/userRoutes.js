const express = require("express");
const { registerUser, loginUser, verifyUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", verifyUser);

module.exports = router;

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     description: Registra un nuevo usuario
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Error al registrar el usuario
 *
 * /api/user/login:
 *   post:
 *     description: Inicia sesión de un usuario
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       400:
 *         description: Error al iniciar sesión
 *
 * /api/user/verify:
 *   get:
 *     description: Verifica un usuario
 *     responses:
 *       200:
 *         description: Usuario verificado
 *       400:
 *         description: Error al verificar usuario
 */
