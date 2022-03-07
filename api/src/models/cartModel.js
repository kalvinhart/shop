const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const cartSchema = new Schema({
  products: {
    type: [Schema.Types.ObjectId],
    required: true,
  },
  customerAddress: {
    type: Map,
    of: String,
    required: true,
  },
  cartTotal: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = model("Cart", cartSchema);
