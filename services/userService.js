const User = require("../features/users/userModel");

const jwt = require("jsonwebtoken");
const { hashSync, compareSync } = require("bcrypt");

const ROLES = require("../config/userRoles");
const { AuthenticationError } = require("../customErrors");

const userService = {
  async register(email, password) {
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new AuthenticationError("An account already exists with this email address.");
    }

    const hashPassword = await hashSync(password, 12);

    const user = new User({ email, password: hashPassword, role: ROLES.User });
    const newUser = await user.save();

    const userCredentials = {
      email: newUser.email,
      id: newUser._id,
      role: ROLES.User,
    };

    const token = jwt.sign(userCredentials, process.env.JWT_SECRET, { expiresIn: "7d" });

    const payload = {
      ...userCredentials,
      token: `Bearer ${token}`,
      wishlist: user.wishlist,
    };

    return payload;
  },
  async signIn(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new AuthenticationError("Incorrect username/password.");
    }

    const passwordMatch = await compareSync(password, user.password);
    if (!passwordMatch) {
      throw new AuthenticationError("Incorrect username/password.");
    }

    const userCredentials = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    const token = jwt.sign(userCredentials, process.env.JWT_SECRET, { expiresIn: "7d" });

    const payload = {
      ...userCredentials,
      token: `Bearer ${token}`,
      wishlist: user.wishlist,
    };

    return payload;
  },
  async getUser(id, token) {
    const user = await User.findOne({ _id: id });
    if (!user) throw new Error("User does not exist.");

    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
      token,
      wishlist: user.wishlist,
    };

    return payload;
  },
};

module.exports = userService;
