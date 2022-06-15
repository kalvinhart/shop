import { createSlice } from "@reduxjs/toolkit";
import { loadCart, addToCart, updateCart, removeFromCart } from "./thunks/cartThunks";

import { calculateCartCount, calculateCartTotal } from "../../utils/cart";
import { CartItem } from "../../domain/models/CartItem";

export type CartState = {
  cart: CartItem[] | null;
  cartCount: number;
  cartTotal: number;
}

const initialState: CartState = { cart: null, cartCount: 0, cartTotal: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state, _) {
      state.cart = null;
      state.cartCount = 0;
      state.cartTotal = 0;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart;
        state.cartCount = action.payload.cartCount;
        state.cartTotal = action.payload.cartTotal;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
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

        state.cart = updatedCart;
        state.cartCount = calculateCartCount(updatedCart);
        state.cartTotal = calculateCartTotal(updatedCart);
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        const { id, newQty } = action.payload;

        const updatedCart = state.cart!.map((item) => {
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

        state.cartCount = calculateCartCount(updatedCart);
        state.cartTotal = calculateCartTotal(updatedCart);
        state.cart = updatedCart;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        const updatedCart = state.cart!.filter((item) => item.id !== action.payload);
        state.cartCount = calculateCartCount(updatedCart);
        state.cartTotal = calculateCartTotal(updatedCart);
        state.cart = updatedCart;
      });
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
