import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../slices/thunks/cartThunks";

export const useCartItem = (item) => {
  const dispatch = useDispatch();

  const { id, name, brand, imageUrl, size, color, qty, total } = item;

  const handleQuantityChange = (value) => {
    dispatch(updateCart({ id, newQty: qty + value }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return {
    id,
    name,
    brand,
    imageUrl,
    size,
    color,
    qty,
    total,
    handleQuantityChange: (val) => handleQuantityChange(val),
    handleRemove: () => handleRemove(),
  };
};
