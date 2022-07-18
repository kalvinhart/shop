import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../../domain/models/Product";

type InitialState = {
  products: Product[];
};

const initialState: InitialState = {
  products: [],
};

const recentlyViewSlice = createSlice({
  name: "recentlyViewed",
  initialState,
  reducers: {
    addProductToRecentlyViewed(state, action) {
      const isFound = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (isFound === undefined) {
        state.products.unshift(action.payload);
      }
    },
  },
});

export const { addProductToRecentlyViewed } = recentlyViewSlice.actions;

export default recentlyViewSlice.reducer;
