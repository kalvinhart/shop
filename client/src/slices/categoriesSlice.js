import { createSlice } from "@reduxjs/toolkit";
import { loadCategories } from "./thunks/categoriesThunks";

const initialState = { loading: true, error: false, categories: [] };

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadCategories.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(loadCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
