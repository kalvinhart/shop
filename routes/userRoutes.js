const router = require("express").Router();
const passport = require("passport");

const {
  registerUser,
  logInUser,
  getUserInfo,
} = require("../features/users/userController");

router.post("/register", registerUser);
router.post("/login", logInUser);
router.post("/:id", passport.authenticate("jwt", { session: false }), getUserInfo);

module.exports = router;
