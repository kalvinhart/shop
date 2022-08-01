const Category = require("./categoryModel");
const { catchAsync } = require("../../middleware/errors");

const getAllCategories = async () => {
  return await Category.find({});
};

const createNewCategory = async (name) => {
  const newCategory = new Category({ name });
  return await newCategory.save();
};

const updateCategory = async (id, name) => {
  return await Category.findByIdAndUpdate(id, name, {
    runValidators: true,
    new: true,
  });
};

const deleteCategory = catchAsync(async (req, res, next) => {
  return await Category.deleteOne({ _id: id });
});

module.exports = {
  getAllCategories,
  createNewCategory,
  updateCategory,
  deleteCategory,
};
