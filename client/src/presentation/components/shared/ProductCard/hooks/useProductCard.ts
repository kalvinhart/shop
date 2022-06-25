import { CartItem } from "../../../../../domain/models/CartItem";
import { Product } from "../../../../../domain/models/Product";
import { useAuthState } from "../../../../hooks/useAuthState/useAuthState";
import { useCartState } from "../../../../hooks/useCartState/useCartState";

export const useProductCard = (productInfo: Product) => {
  const { _id, name, brand, size, color, price, imageUrl } = productInfo;

  const { addToCart } = useCartState();
  const { wishlist, addToWishlist, deleteFromWishlist } = useAuthState();

  const handleAddToCart = () => {
    const itemToAdd: CartItem = {
      id: _id,
      brand,
      color,
      imageUrl,
      name,
      price,
      qty: 1,
      size,
      total: 0,
    };

    addToCart(itemToAdd);
  };

  const isWishlisted = wishlist.includes(_id);

  const handleWishlist = () => {
    isWishlisted ? deleteFromWishlist(_id) : addToWishlist(_id);
  };

  return {
    id: _id,
    name,
    imageUrl,
    price,
    isWishlisted,
    handleWishlist,
    handleAddToCart: () => handleAddToCart(),
  };
};
