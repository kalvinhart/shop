const { convertToRegex } = require("./convertToRegex");

const buildQueryFromSearchOptions = (query, options) => {
  if (options.category) {
    query.where("categories", options.category);
  }

  if (options.name) {
    const nameQuery = new RegExp(options.name, "i");
    query.where({ name: nameQuery });
  }

  if (options.brand) {
    const brands = options.brand.split(",");
    const regex = convertToRegex(brands);

    query.where({ brand: { $in: regex } });
  }

  if (options.color) {
    const colors = options.color.split(",");
    const regex = convertToRegex(colors);

    query.where({ color: { $in: regex } });
  }

  if (options.size) {
    const sizesUpperCase = options.size.toUpperCase();
    const sizes = sizesUpperCase.split(",");

    query.where({ size: { $in: sizes } });
  }

  return query;
};

module.exports = {
  buildQueryFromSearchOptions,
};
