const User = require("../features/users/userModel");
const Product = require("../features/products/productModel");

const wishlistService = {
  async add(userId, productId) {
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
  },
  async remove(userId, productId) {
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
  },
};

module.exports = wishlistService;
