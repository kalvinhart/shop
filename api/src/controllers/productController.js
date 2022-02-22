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

module.exports = {
  getAllProducts,
  getProduct,
};
