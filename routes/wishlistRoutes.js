const router = require("express").Router();
const passport = require("passport");

const {
  addToWishlist,
  removeFromWishlist,
} = require("../controllers/wishlistController");

router.post("/", passport.authenticate("jwt", { session: false }), addToWishlist);
router.post(
  "/remove",
  passport.authenticate("jwt", { session: false }),
  removeFromWishlist
);

module.exports = router;
