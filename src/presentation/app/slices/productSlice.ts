import { createSlice } from "@reduxjs/toolkit";

import { loadProducts } from "./thunks/productThunks";

import { Product } from "../../../domain/models/Product";

export type Pagination = {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  resultsCount: number;
};

type ProductState = {
  loading: boolean;
  error: boolean;
  products: Product[];
  pagination: Pagination;
};

export type ProductOptionsPayload = {
  option: string;
  newOption?: string;
};

const initialState: ProductState = {
  loading: true,
  error: false,
  products: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    pageSize: 15,
    resultsCount: 0,
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updatePaginationLimit(state, action) {
      state.pagination.pageSize = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.pagination = action.payload.pagination;
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

export const { updatePaginationLimit } = productSlice.actions;

export default productSlice.reducer;
