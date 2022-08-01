const Product = require("./productModel");
const { buildQueryFromSearchOptions } = require("./utils/buildQueryFromSearchOptions");

const getAllProducts = async (requestQuery) => {
  let {
    name,
    category,
    brand,
    color,
    size,
    sort = "-amountSold",
    page = 1,
    pagesize: pageSize = 10,
  } = requestQuery;

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
  return response;
};

const getProduct = async (id) => {
  return await Product.findById(id);
};

const getProductsByCategory = async (categoryName) => {
  return await Product.find({
    categories: { $in: [categoryName] },
  });
};

const addNewProduct = async (product) => {
  const newProduct = new Product(product);
  return await newProduct.save();
};

const updateProduct = async (id, updatedProduct) => {
  return await Product.findByIdAndUpdate(id, updatedProduct, {
    runValidators: true,
    new: true,
  });
};

const deleteProduct = (id) => {
  return Product.findOneAndDelete({ _id: id });
};

const deleteManyProducts = async (ids) => {
  return await Product.deleteMany({
    _id: { $in: ids },
  });
};

const getAllFilters = async () => {
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

  return { allBrands, allColors, allSizes };
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
