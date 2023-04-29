import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../../../domain/models/Product";
import { AsyncThunkConfig } from "../../store";

export const loadProductDetails = createAsyncThunk<
  Product,
  string,
  AsyncThunkConfig<any>
>(
  "productDetails/loadProductDetails",
  async (id, { rejectWithValue, extra: { productApi } }) => {
    try {
      const data: Product = await productApi.getProduct(id);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
