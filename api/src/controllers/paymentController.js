const { catchAsync } = require("../middleware/errors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Product = require("../models/productModel");

const calculateOrderAmount = async (items) => {
  const idSet = new Set();

  Object.keys(items).forEach((item) => {
    idSet.add(item);
  });

  const prices = await Product.find({ _id: { $in: [...idSet] } }).select("price");

  const total = prices.reduce((acc, curr) => {
    const id = curr._id.toString();
    const qty = items[id].qty;
    return acc + curr.price * qty;
  }, 0);

  return Number(total.toFixed(2)) * 100;
};

const createIntent = catchAsync(async (req, res, next) => {
  const { items } = req.body;

  const total = await calculateOrderAmount(items);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "gbp",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.status(200).json({ clientSecret: paymentIntent.client_secret, total });
});

module.exports = {
  createIntent,
};
