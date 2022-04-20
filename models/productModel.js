const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    brand: String,
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    size: String,
    color: String,
    description: String,
    imageUrl: {
      type: String,
      default: "/images/no-image.jpg",
    },
    categories: [String],
    stockQty: { type: Number, required: true, default: 1 },
    amountSold: Number,
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
