const Product = require("../models/productModel");
const { catchAsync } = require("../middleware/errors");

const getAllProducts = catchAsync(async (req, res, next) => {
  const { options, sortBy } = req.body;

  const searchOptions = options ?? {};
  const sortSearch = sortBy ? sortBy : "-amountSold";

  console.log(searchOptions);
  console.log(sortSearch);

  if (searchOptions.name) {
    searchOptions.name = new RegExp(searchOptions.name, "i");
  }

  const products = await Product.find(searchOptions).sort(sortSearch);
  const count = products.length;

  const response = {
    products,
    count,
  };
  res.json(response);
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
  await Product.findOneAndDelete({ _id: id }, (err, doc) => {
    if (err) {
      return next(new Error(err));
    } else {
      res.json(doc);
    }
  });
});

const deleteManyProducts = catchAsync(async (req, res, next) => {
  const { ids } = req.body;
  const result = await Product.deleteMany({
    _id: { $in: ids },
  });

  if (result.deletedCount === 0) {
    return next(new Error(`No products were found matching the ID's provided: ${ids}`));
  }

  res.json(result);
});

module.exports = {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  addNewProduct,
  updateProduct,
  deleteProduct,
  deleteManyProducts,
};
