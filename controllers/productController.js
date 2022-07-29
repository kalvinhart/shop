const Product = require("../models/productModel");
const { catchAsync } = require("../middleware/errors");
const { buildQueryFromSearchOptions } = require("../utils/buildQueryFromSearchOptions");

const getAllProducts = catchAsync(async (req, res, next) => {
  let {
    name,
    category,
    brand,
    color,
    size,
    sort = "-amountSold",
    page = 1,
    pagesize: pageSize = 10,
  } = req.query;

  page = Number(page);
  pageSize = Number(pageSize);

  const searchOptions = {
    name,
    category,
    brand,
    color,
    size,
  };

  let query = Product.find();

  query = buildQueryFromSearchOptions(query, searchOptions);

  query.sort(sort);

  const queryCount = await query.clone().count();

  query.skip((page - 1) * pageSize).limit(pageSize);

  const queryResponse = await query.exec();

  const totalPages = Math.ceil(queryCount / pageSize);

  const response = {
    products: queryResponse,
    pagination: {
      currentPage: page,
      pageSize,
      resultsCount: queryCount,
      totalPages,
    },
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

const deleteProduct = (req, res, next) => {
  const { id } = req.params;
  Product.findOneAndDelete({ _id: id }, (err, doc) => {
    if (err) {
      return next(new Error(err));
    } else {
      res.json(doc._id);
    }
  });
};

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

const getAllFilters = catchAsync(async (req, res, next) => {
  console.log("Made it to function.");
  const allBrands = await Product.aggregate([
    {
      $group: {
        _id: "$brand",
        count: { $sum: 1 },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  const allSizes = await Product.aggregate([
    {
      $group: {
        _id: "$size",
        count: { $sum: 1 },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  const allColors = await Product.aggregate([
    {
      $group: {
        _id: "$color",
        count: { $sum: 1 },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  res.json({ allBrands, allColors, allSizes });
});

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
