import { CartItem } from "../../../../domain/models/CartItem";
import { useCartState } from "../../../common/hooks/useCartState";

export const useCartItem = (item: CartItem) => {
  const { updateCart, removeFromCart } = useCartState();

  const { id, name, brand, imageUrl, size, color, qty, total } = item;

  const handleQuantityChange = (value: number) => {
    updateCart({ id, newQty: qty + value });
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  return {
    id,
    name,
    brand,
    imageUrl,
    size,
    color,
    qty,
    total: parseFloat(total.toFixed(2)),
    handleQuantityChange: (val: number) => handleQuantityChange(val),
    handleRemove: () => handleRemove(),
  };
};
