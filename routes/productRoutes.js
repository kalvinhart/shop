const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  addNewProduct,
  updateProduct,
  deleteProduct,
  deleteManyProducts,
} = require("../controllers/productController");

router.post("/", getAllProducts);
router.get("/:id", getProduct);
router.get("/category/:categoryName", getProductsByCategory);
router.post("/new", addNewProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.delete("/", deleteManyProducts);

module.exports = router;
