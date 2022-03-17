import {
  CART_ADD,
  CART_LOAD,
  CART_REMOVE,
  CART_UPDATE,
} from "../constants/cartConstants";

export const cartReducer = (state = { cart: null }, action) => {
  switch (action.type) {
    case CART_LOAD:
      return action.payload;

    case CART_ADD:
      const { id, qty, price } = action.payload;
      let updatedCart;

      console.log(state.cart);
      if (state.cart && state.cart.find((item) => item.id === id)) {
        updatedCart = state.cart.map((item) => {
          if (item.id === id) {
            const newQty = item.qty + qty;
            const itemTotal = parseFloat((newQty * price).toFixed(2));
            return { ...item, qty: newQty, total: itemTotal };
          }
          return item;
        });
      } else {
        const total = qty * price;
        const newCartItem = {
          ...action.payload,
          total,
        };
        updatedCart = state.cart ? [...state.cart, newCartItem] : [newCartItem];
      }

      const cartTotal = updatedCart.reduce(
        (sum, currenItem) => sum + parseFloat(currenItem.total),
        0
      );
      return {
        cart: updatedCart,
        cartTotal,
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
