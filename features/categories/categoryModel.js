const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  subcategories: [String],
});

module.exports = model("Category", categorySchema);
