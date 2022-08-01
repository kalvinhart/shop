const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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
};

module.exports = paymentService;
