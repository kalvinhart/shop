const Category = require("../features/categories/categoryModel");

const categoryService = {
  async getAll() {
    return await Category.find({});
  },
  async createNew(name) {
    const newCategory = new Category({ name });
    return await newCategory.save();
  },
  async update(id, name) {
    return await Category.findByIdAndUpdate(id, name, {
      runValidators: true,
      new: true,
    });
  },
  async delete(id) {
    return await Category.deleteOne({ _id: id });
  },
};

module.exports = categoryService;
