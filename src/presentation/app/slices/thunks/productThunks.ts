import { createAsyncThunk } from "@reduxjs/toolkit";

import { AllProductsReturn } from "../../../../infrastructure/services/interfaces/IProductService";
import { AsyncThunkConfig } from "../../store";

export const loadProducts = createAsyncThunk<
  AllProductsReturn,
  URLSearchParams,
  AsyncThunkConfig<any>
>(
  "products/loadProducts",
  async (options, { rejectWithValue, extra: { productApi } }) => {
    try {
      const data: AllProductsReturn = await productApi.getAllProducts(options);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
