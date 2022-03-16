import axios from "axios";
import { CART_ADD, CART_LOAD, CART_REMOVE } from "../constants/cartConstants";

export const loadCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return {
    type: CART_LOAD,
    payload: cart,
  };
};

export const addToCart = (item) => {
  return {
    type: CART_ADD,
    payload: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: CART_REMOVE,
    payload: id,
  };
};
