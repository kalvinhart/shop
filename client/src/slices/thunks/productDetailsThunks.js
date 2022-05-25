import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadProductDetails = createAsyncThunk(
  "productDetails/loadProductDetails",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
