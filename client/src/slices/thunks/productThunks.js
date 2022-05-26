import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async (options, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/products", options);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
