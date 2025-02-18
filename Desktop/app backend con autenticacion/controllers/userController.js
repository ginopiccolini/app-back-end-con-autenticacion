const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registrar usuario
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: "Usuario registrado", user: newUser });
  } catch (error) {
    res.status(400).json({ message: "Error al registrar usuario" });
  }
};

// Iniciar sesión usuario
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "Inicio de sesión exitoso", token });
};

// Verificar usuario
exports.verifyUser = async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    res.status(200).json({ message: "Usuario verificado", user });
  } catch (error) {
    res.status(400).json({ message: "Error al verificar usuario" });
  }
};
