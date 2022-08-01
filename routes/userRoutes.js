const router = require("express").Router();
const passport = require("passport");

const {
  registerUser,
  logInUser,
  getUserInfo,
} = require("../features/users/userController");
const { catchAsync } = require("../middleware/errors");

// Register User - POST - api/users/register/
router.post(
  "/register",
  catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    const response = await registerUser(email, password);
    res.status(201).json(response);
  })
);

// Log In User - POST - api/users/login/
router.post(
  "/login",
  catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    const response = await logInUser(email, password);
    res.status(200).json(response);
  })
);

// Get User Details - POST - api/users/:id
router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const token = req.header("Authorization");
    const response = await getUserInfo(id, token);
    res.status(200).json(response);
  })
);

module.exports = router;
