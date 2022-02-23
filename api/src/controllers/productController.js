const { NoResultsError, CustomError } = require("../customErrors");
const Product = require("../models/productModel");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    return next(new NoResultsError("all products"));
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

const addNewProduct = async (req, res, next) => {
  const product = req.body;
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.redirect("/products");
  } catch (error) {
    return next(new CustomError(error.message, 500));
  }
};

const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  try {
    await Product.findByIdAndUpdate(id, updatedProduct, { runValidators: true });
    res.redirect("/products");
  } catch (error) {
    return next(new CustomError(error.message, 500));
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Product.deleteOne({ _id: id });
    res.redirect("/products");
  } catch (error) {
    return next(new CustomError(error.message, 500));
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
