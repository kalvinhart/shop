const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: String,
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  size: String,
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
