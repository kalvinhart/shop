const mongoose = require("mongoose");
const ROLES = require("../../config/userRoles");

const { model, Schema } = mongoose;

const addressSchema = new Schema({
  city: String,
  country: String,
  line1: String,
  line2: String,
  postal_code: String,
  state: String,
});

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
    firstName: String,
    lastName: String,
    address: {
      type: addressSchema,
    },
    wishlist: {
      type: [String],
      default: [],
    },
    lastSignedIn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
