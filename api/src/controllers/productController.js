const Product = require("../models/productModel");
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
  addNewProduct,
  updateProduct,
  deleteProduct,
};
