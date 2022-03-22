const jwt = require("jsonwebtoken");
const { hashSync, compareSync } = require("bcrypt");

const User = require("../models/userModel");
const { catchAsync } = require("../middleware/errors");

const registerUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return next({
      status: 400,
      message: "An account already exists with this email address.",
    });
  }

  const hashPassword = await hashSync(password, 12);

  const user = new User({ email, password: hashPassword });
  const newUser = await user.save();

  const userCredentials = {
    email: newUser.email,
    id: newUser._id,
  };

  const token = jwt.sign(userCredentials, process.env.JWT_SECRET, { expiresIn: "7d" });

  const payload = {
    ...userCredentials,
    token: `Bearer ${token}`,
  };

  res.status(201).json(payload);
});

const logInUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return next({ status: 400, message: "Incorrect username/password." });
  }

  const passwordMatch = await compareSync(password, user.password);
  if (!passwordMatch) {
    return next({ status: 400, message: "Incorrect username/password." });
  }

  const userCredentials = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userCredentials, process.env.JWT_SECRET, { expiresIn: "7d" });

  const payload = {
    ...userCredentials,
    token: `Bearer ${token}`,
  };

  res.status(200).json(payload);
});

const getUserInfo = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ _id: id });
  if (!user) throw new Error("User does not exist.");

  const payload = {
    id: user._id,
    email: user.email,
  };

  res.status(200).json(payload);
});

module.exports = {
  registerUser,
  logInUser,
  getUserInfo,
};
