const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const { catchAsync } = require("../middleware/errors");

const getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find({});
  res.json(products);
});

const getProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
});

const getProductsByCategory = catchAsync(async (req, res, next) => {
  const { categoryId } = req.params;
  const category = Category.find({ name: categoryId });
  console.log(category);
  if (!category) throw new Error("Category does not exist");
  const products = await Product.find({
    "categories._id": { $in: [category.categoryId] },
  });
  res.json(products);
});

const addNewProduct = catchAsync(async (req, res, next) => {
  const product = req.body;
  const newProduct = new Product(product);
  const saved = await newProduct.save();
  res.json(saved);
});

const updateProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  const updated = await Product.findByIdAndUpdate(id, updatedProduct, {
    runValidators: true,
    new: true,
  });
  res.json(updated);
});

const deleteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await Product.deleteOne({ _id: id });
  res.json(deleted);
});

module.exports = {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
