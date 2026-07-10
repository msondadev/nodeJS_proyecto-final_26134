# API REST de Productos — Proyecto Final Back-End Node.js (Comisión 26134)

API REST desarrollada en **Node.js + Express**, con persistencia en **Cloud Firestore (Firebase)** y autenticación mediante **JSON Web Tokens (JWT)**. Permite administrar el catálogo de productos de una librería/kiosco: leer, crear y eliminar información, protegiendo las operaciones sensibles con un token Bearer.

## 🚀 Tecnologías

- Node.js (ESModules)
- Express
- Firebase / Cloud Firestore
- JSON Web Token (jsonwebtoken)
- CORS
- body-parser
- dotenv

## 📁 Estructura del proyecto

```
proyecto-final-26134/
├── src/
│   ├── routes/        # Definición de endpoints
│   ├── controllers/   # Reciben la petición y arman la respuesta
│   ├── services/      # Lógica intermedia entre controllers y models
│   ├── models/        # Acceso a datos (Firestore)
│   ├── middlewares/   # Autenticación JWT
│   └── config/        # Configuración de Firebase
├── index.js           # Punto de entrada del servidor
├── .env               # Variables de entorno (no se sube al repo)
├── .env.example       # Plantilla de variables de entorno
└── package.json
```

## ⚙️ Instalación

```bash
git clone https://github.com/msondadev/nodeJS_proyecto-final_26134.git
cd proyecto-final-26134
npm install
```

Creá un archivo `.env` en la raíz basado en `.env.example` y completá tus propias credenciales de Firebase, un usuario/contraseña de administrador y una clave secreta para JWT.

```bash
npm run start
```

El servidor levanta por defecto en `http://localhost:3000`.

## 🔑 Variables de entorno (`.env.example`)

```
PORT=3000

# Firebase
API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=

# Autenticación
ADMIN_USER=
ADMIN_PASSWORD=
JWT_SECRET=
```

## 📚 Endpoints

### Autenticación

#### `POST /auth/login`
Autentica al usuario y devuelve un Bearer Token.

**Body:**
```json
{
  "user": "admin",
  "password": "admin123"
}
```

**Respuesta exitosa (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Errores:**
- `400` — Falta `user` o `password` en el body.
- `401` — Credenciales inválidas.

---

### Productos

#### `GET /api/products`
Devuelve todos los productos.

**Respuesta (200):**
```json
[
  {
    "id": "abc123",
    "nombre": "Cuaderno Éxito Tapa Dura Rayado 42h",
    "precio": 3800,
    "stock": 500,
    "categoria": "Librería"
  },
  {
    "id": "abc124",
    "nombre": "Shampoo Plusbelle Esencia 1L",
    "precio": 2100,
    "stock": 250,
    "categoria": "Perfumería"
  },
  {
    "id": "abc125",
    "nombre": "Velas Blancas Iluminarte (Paquete x4)",
    "precio": 800,
    "stock": 120,
    "categoria": "Bazar"
  }
]
```

#### `GET /api/products/:id`
Devuelve el producto con el ID indicado.

**Respuesta (200):**
```json
{
  "id": "abc123",
  "nombre": "Resma Ledesma Autor A4 500h",
  "precio": 6200,
  "stock": 150,
  "categoria": "Librería"
}
```

**Error:**
- `404` — No existe un producto con ese ID.

#### `POST /api/products/create` 🔒 *(requiere Bearer token)*
Crea un nuevo producto.

**Headers:**
```
Authorization: Bearer <token>
```

**Body:**
```json
{
  "nombre": "Encendedor Candela Transparente",
  "precio": 600,
  "stock": 150,
  "categoria": "Kiosco"
}
```

**Respuesta exitosa (201):**
```json
{
  "id": "def456",
  "nombre": "Encendedor Candela Transparente",
  "precio": 600,
  "stock": 150,
  "categoria": "Kiosco"
}
```

**Errores:**
- `400` — Faltan campos obligatorios (`nombre` o `precio`).
- `401` — No se envió el token.
- `403` — El token es inválido o expiró.

#### `DELETE /api/products/:id` 🔒 *(requiere Bearer token)*
Elimina el producto con el ID indicado.

**Headers:**
```
Authorization: Bearer <token>
```

**Respuesta exitosa (200):**
```json
{
  "message": "Producto eliminado correctamente"
}
```

**Errores:**
- `404` — No existe un producto con ese ID.
- `401` — No se envió el token.
- `403` — El token es inválido o expiró.

---

## ⚠️ Manejo de errores

| Código | Motivo |
|---|---|
| `400` | Petición mal formada (faltan campos obligatorios) |
| `401` | Falta el token de autenticación o credenciales inválidas |
| `403` | Token inválido o expirado |
| `404` | Ruta no definida o recurso no encontrado |
| `500` | Error interno del servidor o falla del servicio externo (Firestore) |

## 🧪 Testing (opcional)

El testing automatizado **no es obligatorio** para este proyecto, pero se puede agregar con Jest y Supertest:

```bash
npm install -D jest supertest
```

En `package.json`:
```json
"scripts": {
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```

```bash
npm test
```

## 🌐 Deploy

Proyecto desplegado en Vercel: `<PEGAR_URL_DEL_DEPLOY_ACÁ>`

## 👤 Autor

Martín Sonda — Comisión 26134, Back-End Node.js, Talento Tech.