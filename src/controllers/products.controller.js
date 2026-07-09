import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService,
} from "../services/products.service.js";

// Obtiene todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

// Obtiene un producto por su ID
export const getProductById = async (req, res) => {
  try {
    const product = await getProductByIdService(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto" });
  }
};

// Crea un nuevo producto
export const createProduct = async (req, res) => {
  try {
    const { nombre, precio, stock, categoria } = req.body;

    if (!nombre || precio === undefined) {
      return res.status(400).json({
        message: "Nombre y precio son obligatorios",
      });
    }

    const newProduct = await createProductService({
      nombre,
      precio,
      stock,
      categoria,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el producto" });
  }
};

// Elimina un producto por su ID
export const deleteProduct = async (req, res) => {
  try {
    const existing = await getProductByIdService(req.params.id);

    if (!existing) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    await deleteProductService(req.params.id);

    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto" });
  }
};