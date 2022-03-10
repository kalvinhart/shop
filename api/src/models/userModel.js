const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const { model, Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = model("User", userSchema);
