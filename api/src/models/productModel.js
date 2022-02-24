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
    categories: [
      {
        type: Schema.Types.ObjectId,
        required: true,
      },
    ],
    stockQty: { type: Number, required: true, default: 1 },
    amountSold: Number,
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
