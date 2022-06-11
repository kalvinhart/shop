import { useState } from "react";
import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { addToCart } from "../../application/slices/thunks/cartThunks";

export const useAddToCart = (product) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const { _id, brand, color, imageUrl, name, price, size, stockQty } = product;

  const handleQuantityChange = (value) => {
    setQuantity((prev) => prev + value);
  };

  const handleAddToCart = () => {
    const itemToAdd = {
      id: _id,
      brand,
      color,
      imageUrl,
      name,
      price,
      qty: quantity,
      size,
    };

    dispatch(addToCart(itemToAdd));
  };

  return {
    quantity,
    price,
    stockQty,
    handleQuantityChange: (val) => handleQuantityChange(val),
    handleAddToCart: () => handleAddToCart(),
  };
};
