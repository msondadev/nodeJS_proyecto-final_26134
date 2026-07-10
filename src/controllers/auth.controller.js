import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ message: "Usuario y contraseña son obligatorios" });
  }
  if (user !== process.env.ADMIN_USER || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};