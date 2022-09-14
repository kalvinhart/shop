const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const addressSchema = new Schema({
  city: String,
  country: String,
  line1: String,
  line2: String,
  postal_code: String,
  state: String,
});

const shippingSchema = new Schema({
  address: {
    type: addressSchema,
  },
  name: String,
});

const itemsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const orderSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    piKey: {
      type: String,
      required: true,
    },
    items: {
      type: [itemsSchema],
    },
    shipping: {
      type: shippingSchema,
    },
  },
  { timestamps: true }
);

module.exports = model("Order", orderSchema);
