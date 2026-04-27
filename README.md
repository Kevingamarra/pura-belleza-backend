# Backend Pura Belleza

API REST desarrollada con Node.js, Express y MongoDB para la gestión de productos y carrito de compras.

## Funcionalidades

* CRUD completo de productos
* Creación de carrito
* Agregado de productos al carrito
* Incremento automático de quantity
* Actualización de cantidad de productos
* Eliminación de productos del carrito
* Vaciado completo del carrito
* Uso de ObjectId y populate para relaciones

## Tecnologías

* Node.js
* Express
* MongoDB Atlas
* Mongoose

## Endpoints principales

### Productos

* GET /api/products
* GET /api/products/:pid
* POST /api/products
* PUT /api/products/:pid
* DELETE /api/products/:pid

### Carrito

* POST /api/carts
* GET /api/carts/:cid
* POST /api/carts/:cid/products/:pid
* PUT /api/carts/:cid/products/:pid
* DELETE /api/carts/:cid/products/:pid
* DELETE /api/carts/:cid

## Nota

La persistencia se implementó utilizando MongoDB en lugar de file system, manteniendo la lógica solicitada en la consigna.

## 📁 Repositorio

https://github.com/Kevingamarra/pura-belleza-backend.git
