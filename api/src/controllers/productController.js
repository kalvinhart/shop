const Product = require("../models/productModel");
const { catchAsync } = require("../middleware/errors");

const getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find({}).limit(20).sort({ amountSold: -1 });
  res.json(products);
});

const getProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
});

const getProductsByCategory = catchAsync(async (req, res, next) => {
  const { categoryName } = req.params;
  const products = await Product.find({
    categories: { $in: [categoryName] },
  });
  if (products.length === 0) {
    res.status(404).json({ msg: "No products were found in this category." });
  } else {
    res.json(products);
  }
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
