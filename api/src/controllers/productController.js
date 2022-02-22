const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

module.exports = getAllProducts;
