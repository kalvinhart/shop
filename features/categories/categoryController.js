const categoryService = require("../../services/categoryService");

const getAllCategories = async () => {
  return await categoryService.getAll();
};

const createNewCategory = async (name) => {
  return await categoryService.createNew(name);
};

const updateCategory = async (id, name) => {
  return await categoryService.update(id, name);
};

const deleteCategory = async (id) => {
  return await categoryService.delete(id);
};

module.exports = {
  getAllCategories,
  createNewCategory,
  updateCategory,
  deleteCategory,
};
