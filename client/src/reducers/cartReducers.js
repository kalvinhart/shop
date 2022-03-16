import {
  CART_ADD,
  CART_LOAD,
  CART_REMOVE,
  CART_UPDATE,
} from "../constants/cartConstants";

export const cartReducer = (state = { cart: null }, action) => {
  switch (action.type) {
    case CART_LOAD:
      return {
        cart: action.payload,
      };
    case CART_ADD:
      const { id, qty } = action.payload;
      const updatedCart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + qty };
        }
        return item;
      });
      return {
        cart: updatedCart,
      };
    case CART_UPDATE:
      return {};
    case CART_REMOVE:
      const filteredCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        cart: filteredCart,
      };
    default:
      return state;
  }
};
