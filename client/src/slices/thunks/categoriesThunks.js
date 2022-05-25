import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadCategories = createAsyncThunk(
  "categories/loadCategories",
  async ({}, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/categories");
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
