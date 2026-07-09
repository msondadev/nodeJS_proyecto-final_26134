import db from "../config/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const products = [
  {
    nombre: "Cuaderno Éxito Tapa Dura Rayado 42h",
    precio: 3800,
    stock: 500,
    categoria: "Librería"
  },
  {
    nombre: "Resma Ledesma Autor A4 500h",
    precio: 6200,
    stock: 150,
    categoria: "Librería"
  },
  {
    nombre: "Bolígrafo BIC Cristal Trazo Fino (Caja x50)",
    precio: 12500,
    stock: 80,
    categoria: "Librería"
  },
  {
    nombre: "Shampoo Plusbelle Esencia 1L",
    precio: 2100,
    stock: 250,
    categoria: "Perfumería"
  },
  {
    nombre: "Desodorante Rexona Men Aerosol 150ml",
    precio: 2800,
    stock: 180,
    categoria: "Perfumería"
  },
  {
    nombre: "Jabón de Tocador Plusbelle (Pack x3)",
    precio: 1600,
    stock: 200,
    categoria: "Perfumería"
  },
  {
    nombre: "Encendedor Candela Transparente",
    precio: 600,
    stock: 150,
    categoria: "Kiosco"
  },
  {
    nombre: "Velas Blancas Iluminarte (Paquete x4)",
    precio: 800,
    stock: 120,
    categoria: "Bazar"
  },
  {
    nombre: "Quitaesmalte Cutex Hipoalergénico 100ml",
    precio: 1500,
    stock: 45,
    categoria: "Perfumería"
  },
  {
    nombre: "Algodón Estrella Clásico 140g",
    precio: 1200,
    stock: 100,
    categoria: "Perfumería"
  },
  {
    nombre: "Marcador Resaltador Trabi (Caja x10)",
    precio: 5500,
    stock: 30,
    categoria: "Librería"
  },
  {
    nombre: "Cinta Adhesiva Transparente 3M 18x50",
    precio: 1100,
    stock: 200,
    categoria: "Librería"
  },
  {
    nombre: "Corrector Líquido Filgo 07",
    precio: 850,
    stock: 90,
    categoria: "Librería"
  },
  {
    nombre: "Clips Metálicos N°3 (Caja x100)",
    precio: 900,
    stock: 150,
    categoria: "Librería"
  },
  {
    nombre: "Crema Corporal Hinds Rosa 250ml",
    precio: 4500,
    stock: 60,
    categoria: "Perfumería"
  }
];


const productsCollection = collection(db, "products");


const seedProducts = async () => {
  try {
    for (const product of products) {
      await addDoc(productsCollection, product);
    }

    console.log("Productos cargados correctamente");
  } catch (error) {
    console.error("Error cargando productos:", error);
  }
};


seedProducts();