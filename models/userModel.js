const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  wishlist: {
    type: [String],
    default: [],
  },
});

module.exports = model("User", userSchema);
