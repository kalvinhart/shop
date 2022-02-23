const { NoResultsError } = require("../customErrors");
const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    throw new NoResultsError(id);
  }
};

const getProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.send(product);
  } catch (error) {
    return next(new NoResultsError(id));
  }
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

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.deleteOne({ _id: id });
  res.redirect("/products");
};

module.exports = {
  getAllProducts,
  getProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
