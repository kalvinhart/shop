const Product = require("../features/products/productModel");
const {
  buildQueryFromSearchOptions,
} = require("../features/products/utils/buildQueryFromSearchOptions");

const productService = {
  async getAll(requestQuery) {
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
  },
  async get(id) {
    return await Product.findById(id);
  },
  async getByCategory(categoryName) {
    return await Product.find({
      categories: { $in: [categoryName] },
    });
  },
  async createNew(product) {
    const newProduct = new Product(product);
    return await newProduct.save();
  },
  async update(id, updatedProduct) {
    return await Product.findByIdAndUpdate(id, updatedProduct, {
      runValidators: true,
      new: true,
    });
  },
  async delete(id) {
    return Product.findOneAndDelete({ _id: id });
  },
  async deleteMany(ids) {
    return await Product.deleteMany({
      _id: { $in: ids },
    });
  },
  async getFilters() {
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
  },
};

module.exports = productService;
