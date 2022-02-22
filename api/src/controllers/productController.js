const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.send(product);
};

const addNewProduct = async (req, res) => {
  const product = req.body;
  console.log(product);
  const newProduct = new Product(product);
  await newProduct.save();
  res.redirect("/products");
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  await Product.findByIdAndUpdate(id, updatedProduct, { runValidators: true });
  res.redirect("/products");
};

module.exports = {
  getAllProducts,
  getProduct,
  addNewProduct,
  updateProduct,
};
