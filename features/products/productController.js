const productService = require("../../services/productService");
const Product = require("./productModel");

const getAllProducts = async (requestQuery) => {
  return await productService.getAll(requestQuery);
};

const getProduct = async (id) => {
  return await productService.get(id);
};

const getProductsByCategory = async (categoryName) => {
  return await productService.getByCategory(categoryName);
};

const addNewProduct = async (product) => {
  return await productService.createNew(product);
};

const updateProduct = async (id, updatedProduct) => {
  return await productService.update(id, updatedProduct);
};

const deleteProduct = async (id) => {
  return await productService.delete(id);
};

const deleteManyProducts = async (ids) => {
  return await productService.deleteMany(ids);
};

const getAllFilters = async () => {
  return await productService.getFilters();
};

module.exports = {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  addNewProduct,
  updateProduct,
  deleteProduct,
  deleteManyProducts,
  getAllFilters,
};
