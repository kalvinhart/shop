const userService = require("../../services/userService");

const registerUser = async (email, password) => {
  return await userService.register(email, password);
};

const logInUser = async (email, password) => {
  return await userService.signIn(email, password);
};

const getUserInfo = async (id, token) => {
  return await userService.getUser(id, token);
};

module.exports = {
  registerUser,
  logInUser,
  getUserInfo,
};
