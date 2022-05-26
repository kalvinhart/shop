import { createSlice } from "@reduxjs/toolkit";
import { loadProducts } from "./thunks/productThunks";

const initialState = {
  loading: true,
  error: false,
  count: 0,
  products: [],
  searchOptions: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateSearchOptions(state, action) {
      if (action.payload === null) {
        state.searchOptions = {};
      }

      const { option, newOption } = action.payload;

      if (newOption !== "") {
        state.searchOptions[option] = newOption;
      } else {
        delete state.searchOptions[option];
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadProducts.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.count = action.payload.count;
        state.products = action.payload.products;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateSearchOptions } = productSlice.actions;

export default productSlice.reducer;
