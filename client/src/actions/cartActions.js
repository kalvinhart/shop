import { toast } from "react-hot-toast";
import { CART_ADD, CART_LOAD, CART_REMOVE } from "../constants/cartConstants";

export const loadCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  const now = Date.now();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const expiration = oneWeek;

  if (now - cart.updatedAt > expiration) {
    localStorage.removeItem("cart");
    return {
      type: CART_LOAD,
      payload: { cart: null },
    };
  }

  return {
    type: CART_LOAD,
    payload: cart,
  };
};

export const addToCart = (item) => (dispatch, getState) => {
  dispatch({
    type: CART_ADD,
    payload: item,
  });

  toast.success("Item added to cart.");

  const { cart } = getState();

  const cartStorage = {
    ...cart,
    updatedAt: Date.now(),
  };
  console.log(cartStorage.updatedAt);
  localStorage.setItem("cart", JSON.stringify(cartStorage));
};

export const removeFromCart = (id) => {
  return {
    type: CART_REMOVE,
    payload: id,
  };
};
