import db from "../config/firebase.js";
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

// Traemos todos los productos
export const getProducts = async () => {
  const snapshot = await getDocs(productsCollection);
  const products = [];
  snapshot.forEach((docSnap) => {
  products.push({
    id: docSnap.id,
    ...docSnap.data()
  });
});
  return products;
};


// Traemos un producto por ID
export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};


// Crea un producto
export const createProduct = async (data) => {
  const docRef = await addDoc(productsCollection, data);
  return { id: docRef.id, ...data };
};

// Elimina un producto
export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, "products", id));
  return { id };
};

