import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { addToCart } from "../../application/slices/thunks/cartThunks";
import { CartItem } from "../../domain/models/CartItem";
import { Product } from "../../domain/models/Product";

export const useProductCard = (productInfo: Product) => {
  const dispatch = useAppDispatch();
  const { _id, name, brand, size, color, price, imageUrl } = productInfo;

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
      total: 0
    };

    dispatch(addToCart(itemToAdd));
  };

  return {
    id: _id,
    name,
    imageUrl,
    price,
    handleAddToCart: () => handleAddToCart(),
  };
};
