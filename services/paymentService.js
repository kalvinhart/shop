const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret =
  "whsec_be9c315a348e616c83d051c5c5987587210c7390b04fb9ca27bfda9c663519a7";

const Order = require("../features/orders/orderModel");

const paymentService = {
  async createIntent({ items, user, total }) {
    console.log(items, total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "gbp",
      payment_method_types: ["card"],
      receipt_email: user.email,
      metadata: { userId: user.id, items },
    });

    return paymentIntent;
  },
  async handleWebhook(event, signature) {
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
  },
};

module.exports = paymentService;
