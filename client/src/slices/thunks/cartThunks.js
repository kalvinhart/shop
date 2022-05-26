import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const loadCart = createAsyncThunk("cart/loadCart", async () => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  const now = Date.now();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const expiration = oneWeek;

  if (now - cart.updatedAt > expiration) {
    localStorage.removeItem("cart");
    return null;
  }

  return cart;
});

export const addToCart = createAsyncThunk("cart/addToCart", async (item) => {
  toast.success("Item added to cart.");

  return item;
});

export const updateCart = createAsyncThunk("cart/updateCart", async (cartData) => {
  toast.success("Cart successfully updated.");

  return cartData;
});

export const removeFromCart = createAsyncThunk("cart/removeFromCart", async (id) => {
  toast.success("Cart successfully updated.");

  return id;
});
