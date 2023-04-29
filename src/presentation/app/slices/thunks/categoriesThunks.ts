import { createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../../../../domain/models/Category";

import { AsyncThunkConfig } from "../../store";

export const loadCategories = createAsyncThunk<Category[], void, AsyncThunkConfig<any>>(
  "categories/loadCategories",
  async (_, { rejectWithValue, extra: { categoryApi } }) => {
    try {
      const data = await categoryApi.getAllCategories();
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
