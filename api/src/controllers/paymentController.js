const { catchAsync } = require("../middleware/errors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Product = require("../models/productModel");

const endpointSecret =
  "whsec_be9c315a348e616c83d051c5c5987587210c7390b04fb9ca27bfda9c663519a7";

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

const handleWebhook = (req, res, next) => {
  let event = req.body;

  if (endpointSecret) {
    const signature = req.headers["stripe-signature"];
    try {
      event = stripe.webhooks.constructEvent(req.body, signature, endpointSecret);
    } catch (err) {
      next(err);
    }
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    const { id, amount, created, customer, shipping } = paymentIntent;
    console.log(paymentIntent);
  }

  res.status(200);
};

module.exports = {
  createIntent,
  handleWebhook,
};
