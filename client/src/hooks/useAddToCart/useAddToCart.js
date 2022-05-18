import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";

export const useAddToCart = (product) => {
  const dispatch = useDispatch();
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
