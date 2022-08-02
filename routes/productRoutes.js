const express = require("express");
const router = express.Router();

const { catchAsync } = require("../middleware/errors");

const {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  addNewProduct,
  updateProduct,
  deleteProduct,
  deleteManyProducts,
  getAllFilters,
} = require("../features/products/productController");

// Get All Products - GET - api/products/
router.get(
  "/",
  catchAsync(async (req, res, next) => {
    const { query } = req;

    const response = await getAllProducts(query);

    res.json(response);
  })
);

// Get All Filters - GET - api/products/filters
router.get(
  "/filters",
  catchAsync(async (req, res, next) => {
    const response = await getAllFilters();
    res.json(response);
  })
);

// Get Product - GET - api/products/:id
router.get(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const response = await getProduct(id);
    res.json(response);
  })
);

// Get All Products By Category - GET - api/products/:categoryName
router.get(
  "/category/:categoryName",
  catchAsync(async (req, res, next) => {
    const { categoryName } = req.params;
    const response = await getProductsByCategory(categoryName);

    if (response.length === 0) {
      res.status(404).json({ msg: "No products were found in this category." });
    } else {
      res.json(response);
    }
  })
);

// Create New Product - POST - api/products/new
router.post(
  "/new",
  catchAsync(async (req, res, next) => {
    const product = req.body;
    const response = await addNewProduct(product);
    res.json(response);
  })
);

// Update Product - PATCH - api/products/:id
router.patch(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    const response = await updateProduct(id, updatedProduct);
    res.json(response);
  })
);

// Delete Product - DELETE - api/products/:id
router.delete(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const response = deleteProduct(id);
    res.json(response);
  })
);

// Delete Many Product - PATCH - api/products/
router.patch(
  "/",
  catchAsync(async (req, res, next) => {
    const { ids } = req.body;
    const response = await deleteManyProducts(ids);

    if (response.deletedCount === 0) {
      return next(new Error(`No products were found matching the ID's provided: ${ids}`));
    }

    res.json(response);
  })
);

module.exports = router;
