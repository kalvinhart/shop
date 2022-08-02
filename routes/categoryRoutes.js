const express = require("express");
const router = express.Router();

const {
  getAllCategories,
  createNewCategory,
  updateCategory,
  deleteCategory,
} = require("../features/categories/categoryController");
const { catchAsync } = require("../middleware/errors");

// Get All Categories - GET - api/categories/
router.get(
  "/",
  catchAsync(async (req, res, next) => {
    const response = await getAllCategories();
    res.status(200).json(response);
  })
);

// Create New Category - POST - api/categories/
router.post(
  "/",
  catchAsync(async (req, res, next) => {
    const { name } = req.body;
    const response = createNewCategory(name);
    res.status(201).json(response);
  })
);

// Update Category - PATCH - api/categories/:id
router.patch(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    const response = await updateCategory(id, name);
    res.status(201).json(response);
  })
);

// Delete Category - DELETE - api/categories/:id
router.delete(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const response = await deleteCategory(id);
    res.status(200).json(response);
  })
);

module.exports = router;
