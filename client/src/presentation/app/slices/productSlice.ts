import { createSlice } from "@reduxjs/toolkit";

import { loadProducts } from "./thunks/productThunks";

import { Product } from "../../../domain/models/Product";

export type SelectedFilters = {
  brand: string;
  color: string;
  size: string;
};

type ProductState = {
  loading: boolean;
  error: boolean;
  count: number;
  products: Product[];
};

export type ProductOptionsPayload = {
  option: string;
  newOption?: string;
};

const initialState: ProductState = {
  loading: true,
  error: false,
  count: 0,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.count = action.payload.count;
        state.products = action.payload.products;
      })
      .addCase(loadProducts.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
