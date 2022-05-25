import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: true, count: 0, products: [], searchOptions: {} };

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateSearchOptions(state, action) {
      if (action.payload === null) {
        state.searchOptions = {};
      }

      const { option, newOption } = action.payload;

      if (newOption !== "") {
        state.searchOptions[option] = newOption;
      } else {
        delete state.searchOptions[option];
      }
    },
  },
});

export const { updateSearchOptions } = productSlice.actions;

export default productSlice.reducer;
