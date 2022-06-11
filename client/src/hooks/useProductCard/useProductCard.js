import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { addToCart } from "../../application/slices/thunks/cartThunks";

export const useProductCard = (productInfo) => {
  const dispatch = useAppDispatch();
  const { _id, name, brand, size, color, price, imageUrl } = productInfo;

  const handleAddToCart = () => {
    const itemToAdd = {
      id: _id,
      brand,
      color,
      imageUrl,
      name,
      price,
      qty: 1,
      size,
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
