import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { removeFromCart, updateCart } from "../../application/slices/thunks/cartThunks";

export const useCartItem = (item) => {
  const dispatch = useAppDispatch();

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
