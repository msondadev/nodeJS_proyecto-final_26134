import * as ProductsModel from "../models/Products.js";

export const getAllProductsService = () =>
  ProductsModel.getProducts();

export const getProductByIdService = (id) =>
  ProductsModel.getProductById(id);

export const createProductService = (data) =>
  ProductsModel.createProduct(data);

export const deleteProductService = (id) =>
  ProductsModel.deleteProduct(id);