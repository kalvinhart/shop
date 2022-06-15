import { useState } from "react";

import { Product } from "../../../domain/models/Product";
import { CartItem } from "../../../domain/models/CartItem";
import { useCartState } from "../../../hooks/shared/useCartState/useCartState";

export const useAddToCart = (product: Product) => {
  const {addToCart} = useCartState()
  const [quantity, setQuantity] = useState(1);
  const { _id, brand, color, imageUrl, name, price, size, stockQty } = product;

  const handleQuantityChange = (value: number) => {
    setQuantity((prev) => prev + value);
  };

  const handleAddToCart = () => {
    const itemToAdd: CartItem = {
      id: _id,
      brand,
      color,
      imageUrl,
      name,
      price,
      qty: quantity,
      size,
      total: 0
    };

    addToCart(itemToAdd);
  };

  return {
    quantity,
    price,
    stockQty,
    handleQuantityChange: (val: number) => handleQuantityChange(val),
    handleAddToCart: () => handleAddToCart(),
  };
};
