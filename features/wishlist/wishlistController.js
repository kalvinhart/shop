const wishlistService = require("../../services/wishlistService");

const addToWishlist = async (userId, productId) => {
  return await wishlistService.add(userId, productId);
};

const removeFromWishlist = async (userId, productId) => {
  return await wishlistService.remove(userId, productId);
};

module.exports = { addToWishlist, removeFromWishlist };
