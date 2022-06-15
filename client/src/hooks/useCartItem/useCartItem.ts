import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { removeFromCart, updateCart } from "../../application/slices/thunks/cartThunks";
import { CartItem } from "../../domain/models/CartItem";

export const useCartItem = (item: CartItem) => {
  const dispatch = useAppDispatch();

  const { id, name, brand, imageUrl, size, color, qty, total } = item;

  const handleQuantityChange = (value: number) => {
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
    handleQuantityChange: (val: number) => handleQuantityChange(val),
    handleRemove: () => handleRemove(),
  };
};
