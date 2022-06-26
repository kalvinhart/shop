import { createAsyncThunk } from "@reduxjs/toolkit";

import { ProductData } from "../../../infrastructure/services/interfaces/IHttpService";
import {
  AllProductsReturn,
  FiltersReturn,
} from "../../../infrastructure/services/interfaces/IProductService";
import { AsyncThunkConfig } from "../../store";

export const loadProducts = createAsyncThunk<
  AllProductsReturn,
  ProductData,
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

export const loadFilters = createAsyncThunk<FiltersReturn, void, AsyncThunkConfig<any>>(
  "products/loadFilters",
  async (_, { rejectWithValue, extra: { productApi } }) => {
    try {
      const data = await productApi.getAllFilters();
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
