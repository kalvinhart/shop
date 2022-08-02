const paymentService = require("../../services/paymentService");
const calculateOrderAmount = require("./utils/calculateOrderAmount");

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
  await paymentService.handleWebhook(event, signature);
};

module.exports = {
  createIntent,
  handleWebhook,
};
