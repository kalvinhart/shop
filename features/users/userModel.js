const mongoose = require("mongoose");
const ROLES = require("../../config/userRoles");

const { model, Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      enum: [ROLES.User, ROLES.Admin],
      immutable: true,
      default: ROLES.User,
    },
    wishlist: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
