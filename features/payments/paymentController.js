const { catchAsync } = require("../../middleware/errors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const Order = require("../orders/orderModel");
const paymentService = require("../../services/paymentService");
const calculateOrderAmount = require("./utils/calculateOrderAmount");

const endpointSecret =
  "whsec_be9c315a348e616c83d051c5c5987587210c7390b04fb9ca27bfda9c663519a7";

const createIntent = catchAsync(async (req, res, next) => {
  const { items, user } = req.body;

  const total = await calculateOrderAmount(items);
  const stringyfiedItems = JSON.stringify(items);

  const paymentIntent = await paymentService.createIntent({
    items: stringyfiedItems,
    user,
    total,
  });

  res.status(200).json({ clientSecret: paymentIntent.client_secret, total });
});

const handleWebhook = async (req, res, next) => {
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
    const {
      id,
      amount,
      metadata,
      shipping: { address, name },
    } = paymentIntent;
    console.log(paymentIntent);

    const metadataItems = JSON.parse(metadata.items);
    const orderItems = [];

    Object.keys(metadataItems).forEach((item) => {
      const singleItem = {
        id: item,
        qty: metadataItems[item].qty,
        total: metadataItems[item].total,
      };
      orderItems.push(singleItem);
    });

    const order = {
      piKey: id,
      userId: metadata.userId,
      amount,
      items: orderItems,
      shipping: {
        address,
        name,
      },
    };

    console.log(order);

    try {
      const newOrder = new Order(order);
      const savedOrder = await newOrder.save();
    } catch (err) {
      next(err);
    }
  }
  res.status(200).end();
};

module.exports = {
  createIntent,
  handleWebhook,
};
