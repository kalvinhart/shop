const User = require("../users/userModel");
const Product = require("../products/productModel");

const { catchAsync } = require("../../middleware/errors");

const addToWishlist = catchAsync(async (req, res, next) => {
  const { productId, userId } = req.body;

  const product = await Product.findById(productId);
  if (!product) return next({ status: 404, message: "Product not found." });

  const user = User.findById(userId);
  if (!user) return next({ status: 404, message: "User not found." });

  await User.findByIdAndUpdate(
    userId,
    {
      $push: {
        wishlist: productId,
      },
    },
    { runValidators: true }
  );

  return res.status(201).json({ message: "Wishlist updated." });
});

const removeFromWishlist = catchAsync(async (req, res, next) => {
  const { productId, userId } = req.body;

  const user = User.findById(userId);
  if (!user) return next({ status: 404, message: "User not found." });

  await User.findByIdAndUpdate(
    userId,
    {
      $pull: {
        wishlist: productId,
      },
    },
    { runValidators: true }
  );

  return res.status(201).json({ id: productId });
});

module.exports = { addToWishlist, removeFromWishlist };
