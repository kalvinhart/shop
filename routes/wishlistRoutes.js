const router = require("express").Router();
const passport = require("passport");

const {
  addToWishlist,
  removeFromWishlist,
} = require("../features/wishlist/wishlistController");
const { catchAsync } = require("../middleware/errors");

// Add to Wishlist - POST - api/wishlist/
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  catchAsync(async (req, res, next) => {
    const { userId, productId } = req.body;
    await addToWishlist(userId, productId);
    return res.status(201).json({ message: "Wishlist updated." });
  })
);

// Remove From Wishlist - POST - api/wishlist/remove
router.post(
  "/remove",
  passport.authenticate("jwt", { session: false }),
  catchAsync((req, res, next) => {
    const { userId, productId } = req.body;
    removeFromWishlist(userId, productId);
    return res.status(201).json({ id: productId });
  })
);

module.exports = router;
