const Product = require("../../products/productModel");

const calculateOrderAmount = async (items) => {
  const idSet = new Set();

  Object.keys(items).forEach((item) => {
    idSet.add(item);
  });

  const prices = await Product.find({ _id: { $in: [...idSet] } }).select("price");

  const total = prices.reduce((acc, curr) => {
    const id = curr._id.toString();
    const { qty } = items[id];
    return acc + curr.price * qty;
  }, 0);

  return Number((total * 100).toFixed(2));
};

module.exports = calculateOrderAmount;
