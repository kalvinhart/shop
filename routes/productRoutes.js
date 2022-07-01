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
  getAllFilters,
} = require("../controllers/productController");

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.get("/category/:categoryName", getProductsByCategory);
router.post("/new", addNewProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.patch("/", deleteManyProducts);
router.get("/filters", getAllFilters);

module.exports = router;
