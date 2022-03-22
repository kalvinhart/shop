const Category = require("../models/categoryModel");
const { catchAsync } = require("../middleware/errors");

const getAllCategories = catchAsync(async (req, res, next) => {
  const categories = await Category.find({}).select("name");
  res.status(200).json(categories);
});

const createNewCategory = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  const newCategory = new Category({ name });
  const saved = await newCategory.save();
  res.status(201).json(saved);
});

const updateCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedCategory = await Category.findByIdAndUpdate(id, name, {
    runValidators: true,
    new: true,
  });
  res.status(201).json(updatedCategory);
});

const deleteCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await Category.deleteOne({ _id: id });
  res.status(200).json(deleted);
});

module.exports = {
  getAllCategories,
  createNewCategory,
  updateCategory,
  deleteCategory,
};
