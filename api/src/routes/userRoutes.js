const router = require("express").Router();

const { registerUser, logInUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", logInUser);
// router.patch("/:id", )

module.exports = router;
