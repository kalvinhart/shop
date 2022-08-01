const User = require("../users/userModel");
const Product = require("../products/productModel");

const { catchAsync } = require("../../middleware/errors");

const addToWishlist = async (userId, productId) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found.");

  const user = User.findById(userId);
  if (!user) throw new Error("User not found.");

  await User.findByIdAndUpdate(
    userId,
    {
      $push: {
        wishlist: productId,
      },
    },
    { runValidators: true }
  );
};

const removeFromWishlist = async (userId, productId) => {
  const user = User.findById(userId);
  if (!user) throw new Error("User not found.");

  await User.findByIdAndUpdate(
    userId,
    {
      $pull: {
        wishlist: productId,
      },
    },
    { runValidators: true }
  );
};

module.exports = { addToWishlist, removeFromWishlist };
