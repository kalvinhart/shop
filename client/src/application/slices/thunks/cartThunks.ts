import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { CartItem } from "../../../domain/models/CartItem";

type UpdateCartItem = {
  id: string;
  newQty: number;
}

export const loadCart = createAsyncThunk("cart/loadCart", async () => {
  const cart = JSON.parse(localStorage.getItem("cart") as string);

  const now = Date.now();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const expiration = oneWeek;

  if (now - cart.updatedAt > expiration) {
    localStorage.removeItem("cart");
    return null;
  }

  return cart;
});

export const addToCart = createAsyncThunk<CartItem, CartItem>("cart/addToCart", async (item) => {
  toast.success("Item added to cart.");

  return item;
});

export const updateCart = createAsyncThunk<UpdateCartItem, UpdateCartItem>("cart/updateCart", async (cartData) => {
  toast.success("Cart successfully updated.");

  return cartData;
});

export const removeFromCart = createAsyncThunk<string, string>("cart/removeFromCart", async (id) => {
  toast.success("Cart successfully updated.");

  return id;
});
