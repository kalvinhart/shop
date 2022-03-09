const User = require("../models/userModel");
const { catchAsync } = require("../middleware/errors");

const registerUser = catchAsync(async (req, res, next) => {
  const { email, username, password } = req.body;
  const user = new User({ email, username });
  const newUser = await User.register(user, password);
  res.status(201).json(newUser);
});

const logInUser = catchAsync(async (req, res, next) => {});

module.exports = {
  registerUser,
  logInUser,
};
