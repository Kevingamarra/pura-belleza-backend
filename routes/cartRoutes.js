const express = require("express");
const router = express.Router();

const {
  getCarts,
  getCartById,
  createCart,
  addProductToCart,
  deleteProductFromCart,
  clearCart, updateCart, updateProductQuantity
} = require("../controllers/cartController");

router.get("/", getCarts);
router.get("/:cid", getCartById);
router.post("/", createCart);
router.post("/:cid/products/:pid", addProductToCart);
router.delete("/:cid/products/:pid", deleteProductFromCart);
router.delete("/:cid", clearCart);

module.exports = router;

router.put("/:cid", updateCart);
router.put("/:cid/products/:pid", updateProductQuantity);
