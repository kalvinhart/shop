import { toast } from "react-hot-toast";
import {
  CART_ADD,
  CART_CLEAR,
  CART_LOAD,
  CART_REMOVE,
  CART_UPDATE,
} from "../constants/cartConstants";
import { updateLocalStorage } from "../utils/cart";

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

  updateLocalStorage(cart);
};

export const updateCart = (id, newQty) => (dispatch, getState) => {
  dispatch({
    type: CART_UPDATE,
    payload: { id, newQty },
  });

  toast.success("Cart successfully updated.");

  const { cart } = getState();

  updateLocalStorage(cart);
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE,
    payload: id,
  });

  toast.success("Item removed to cart.");

  const { cart } = getState();

  updateLocalStorage(cart);
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: CART_CLEAR });
  updateLocalStorage("");
};
