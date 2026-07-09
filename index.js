import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import productsRouter from "./src/routes/products.router.js";
// import authRouter from "./src/routes/auth.router.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api/products", productsRouter);
// app.use("/auth", authRouter);

// Middleware para rutas no definidas
app.use((req, res) => {
  res.status(404).json({
    message: "Ruta no encontrada",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});