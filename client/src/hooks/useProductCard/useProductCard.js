import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/thunks/cartThunks";

export const useProductCard = (productInfo) => {
  const dispatch = useDispatch();
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
