const User = require("../models/userModel");
const { catchAsync } = require("../middleware/errors");

const registerUser = catchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;

  const user = new User({ username, email });

  const newUser = await User.register(user, password);

  req.session.user = newUser._id;

  res.status(201).json(newUser._id);
});

const logInUser = catchAsync(async (req, res, next) => {});

module.exports = {
  registerUser,
  logInUser,
};
