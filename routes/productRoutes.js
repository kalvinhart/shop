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

router.get(
  "/",
  catchAsync(async (req, res, next) => {
    const { query } = req;

    const response = await getAllProducts(query);

    res.json(response);
  })
);

router.get(
  "/filters",
  catchAsync(async (req, res, next) => {
    const response = await getAllFilters();
    res.json(response);
  })
);

router.get(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const response = await getProduct(id);
    res.json(response);
  })
);

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

router.post(
  "/new",
  catchAsync(async (req, res, next) => {
    const product = req.body;
    const response = await addNewProduct(product);
    res.json(response);
  })
);

router.patch(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    const response = await updateProduct(id, updatedProduct);
    res.json(response);
  })
);

router.delete(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const response = deleteProduct(id);
    res.json(response);
  })
);

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
