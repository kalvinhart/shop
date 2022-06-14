import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../domain/models/Product";
import { loadProductDetails } from "./thunks/productDetailsThunks";

type ProductDetailsState = {
  loading: boolean;
  product: Product | [];
  error: boolean;
}

const initialState: ProductDetailsState = { loading: true, product: [], error: false };

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadProductDetails.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loadProductDetails.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(loadProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productDetailsSlice.reducer;
