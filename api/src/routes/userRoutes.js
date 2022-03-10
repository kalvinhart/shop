const router = require("express").Router();
const passport = require("passport");

const { registerUser, logInUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", passport.authenticate("local"), logInUser);
// router.patch("/:id", )

module.exports = router;
