import { CartItem } from "../../../../../domain/models/CartItem";
import { Product } from "../../../../../domain/models/Product";
import { useCartState } from "../../../../hooks/useCartState/useCartState";

export const useProductCard = (productInfo: Product) => {
  const { _id, name, brand, size, color, price, imageUrl } = productInfo;

  const { addToCart } = useCartState();

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

  return {
    id: _id,
    name,
    imageUrl,
    price,
    handleAddToCart: () => handleAddToCart(),
  };
};
