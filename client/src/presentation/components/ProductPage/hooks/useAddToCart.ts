import { useState } from "react";

import { useCartState } from "../../../hooks/useCartState/useCartState";
import { useAuthState } from "../../../hooks/useAuthState/useAuthState";

import { Product } from "../../../../domain/models/Product";
import { CartItem } from "../../../../domain/models/CartItem";

export const useAddToCart = (product: Product) => {
  const { addToCart } = useCartState();
  const { wishlist, addToWishlist, deleteFromWishlist } = useAuthState();
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
      total: 0,
    };

    addToCart(itemToAdd);
  };

  const isWishlisted = wishlist.includes(_id);

  const addProductToWishlist = (id: string) => {
    addToWishlist(id);
  };

  return {
    id: _id,
    quantity,
    price,
    stockQty,
    handleQuantityChange: (val: number) => handleQuantityChange(val),
    handleAddToCart: () => handleAddToCart(),
    isWishlisted,
    addProductToWishlist,
    deleteFromWishlist,
  };
};
