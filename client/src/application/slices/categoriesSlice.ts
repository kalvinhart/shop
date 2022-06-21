import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../../domain/models/Category";
import { loadCategories } from "./thunks/categoriesThunks";

interface CategoryState {
  loading: boolean;
  error: boolean;
  categories: Category[];
}

const initialState: CategoryState = { loading: true, error: false, categories: [] };

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadCategories.pending, (state, _) => {
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
