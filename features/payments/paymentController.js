const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const Order = require("../orders/orderModel");
const paymentService = require("../../services/paymentService");
const calculateOrderAmount = require("./utils/calculateOrderAmount");

const endpointSecret =
  "whsec_be9c315a348e616c83d051c5c5987587210c7390b04fb9ca27bfda9c663519a7";

const createIntent = async (items, user) => {
  const total = await calculateOrderAmount(items);
  const stringyfiedItems = JSON.stringify(items);

  const paymentIntent = await paymentService.createIntent({
    items: stringyfiedItems,
    user,
    total,
  });

  return { clientSecret: paymentIntent.client_secret, total };
};

const handleWebhook = async (event, signature) => {
  console.log("Reached Webhook...");
  if (endpointSecret) {
    constructedEvent = stripe.webhooks.constructEvent(event, signature, endpointSecret);
  }

  if (constructedEvent.type === "payment_intent.succeeded") {
    const paymentIntent = constructedEvent.data.object;
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

    console.log("order: ", order);
    const newOrder = new Order(order);
    await newOrder.save();
    console.log("Order saved!");
  }
};

module.exports = {
  createIntent,
  handleWebhook,
};
