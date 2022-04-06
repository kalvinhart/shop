import {
  CART_ADD,
  CART_CLEAR,
  CART_LOAD,
  CART_REMOVE,
  CART_UPDATE,
} from "../constants/cartConstants";

import { calculateCartCount, calculateCartTotal } from "../utils/cart";

export const cartReducer = (state = { cart: null }, action) => {
  switch (action.type) {
    case CART_LOAD:
      return action.payload;

    case CART_ADD: {
      const { id, qty, price } = action.payload;
      let updatedCart;

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

      const cartCount = calculateCartCount(updatedCart);
      const cartTotal = calculateCartTotal(updatedCart);

      return {
        cartCount,
        cart: updatedCart,
        cartTotal,
      };
    }

    case CART_UPDATE: {
      const { id, newQty } = action.payload;

      const updatedCart = state.cart.map((item) => {
        if (item.id === id) {
          const total = parseFloat((newQty * item.price).toFixed(2));
          return {
            ...item,
            qty: newQty,
            total,
          };
        } else {
          return item;
        }
      });

      const cartCount = calculateCartCount(updatedCart);
      const cartTotal = calculateCartTotal(updatedCart);

      return {
        cartCount,
        cart: updatedCart,
        cartTotal,
      };
    }

    case CART_REMOVE: {
      const updatedCart = state.cart.filter((item) => item.id !== action.payload);
      const cartCount = calculateCartCount(updatedCart);
      const cartTotal = calculateCartTotal(updatedCart);

      return {
        cartCount,
        cart: updatedCart,
        cartTotal,
      };
    }

    case CART_CLEAR: {
      return { cartCount: 0, cart: [], cartTotal: 0 };
    }

    default:
      return state;
  }
};
