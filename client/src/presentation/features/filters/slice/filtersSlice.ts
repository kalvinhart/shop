import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { loadProducts } from "../../../app/slices/thunks/productThunks";

import { Filters } from "../../../../infrastructure/services/interfaces/IProductService";

import { removeFilterFromFilterString } from "../utils/filters";

export type SelectedFilters = {
  brand: string;
  color: string;
  size: string;
};

type FilterState = {
  filters: {
    allBrands: Filters[];
    allColors: Filters[];
    allSizes: Filters[];
  } | null;
  selectedFilters: SelectedFilters;
  isFiltered: boolean;
  isFilterApplied: boolean;
};

type FilterOptionsPayload = {
  filterName: string;
  filterValue: string;
};

const initialState: FilterState = {
  filters: null,
  selectedFilters: {
    brand: "",
    color: "",
    size: "",
  },
  isFiltered: false,
  isFilterApplied: false,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addToFilters(state, action: PayloadAction<FilterOptionsPayload>) {
      const { filterName, filterValue } = action.payload;

      if (state.selectedFilters[filterName as keyof SelectedFilters] === "") {
        state.selectedFilters[filterName as keyof SelectedFilters] = filterValue;
      } else {
        state.selectedFilters[filterName as keyof SelectedFilters] += `,${filterValue}`;
      }

      state.isFiltered = true;
    },
    removeFromFilters(state, action: PayloadAction<FilterOptionsPayload>) {
      const { filterName, filterValue } = action.payload;

      const currentFilterString =
        state.selectedFilters[filterName as keyof SelectedFilters];

      if (currentFilterString === undefined || currentFilterString === "") return;

      if (state.selectedFilters[filterName as keyof SelectedFilters].includes(",")) {
        const newFilterString = removeFilterFromFilterString(
          currentFilterString,
          filterValue
        );

        if (newFilterString === "") return;

        state.selectedFilters[filterName as keyof SelectedFilters] = newFilterString;
      } else {
        state.selectedFilters[filterName as keyof SelectedFilters] = "";
        state.isFiltered = false;
      }
    },
    setFiltersApplied(state, action) {
      state.isFilterApplied = action.payload;
    },
    clearFilters(state) {
      ["brand", "color", "size"].forEach(
        (filter) => (state.selectedFilters[filter as keyof SelectedFilters] = "")
      );
      state.isFiltered = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadProducts.fulfilled, (state, action) => {
      state.filters = {
        allBrands: action.payload.allBrands,
        allColors: action.payload.allColors,
        allSizes: action.payload.allSizes,
      };
    });
  },
});

export const { addToFilters, removeFromFilters, clearFilters, setFiltersApplied } =
  filterSlice.actions;

export default filterSlice.reducer;
