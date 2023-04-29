import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  Filters,
  FiltersReturn,
} from "../../../../infrastructure/services/interfaces/IProductService";

import { removeFilterFromFilterString } from "../utils/filters";
import { AsyncThunkConfig } from "../../../app/store";

export type SelectedFilters = {
  brand: string;
  color: string;
  size: string;
};

type FilterState = {
  loading: boolean;
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
  loading: false,
  filters: null,
  selectedFilters: {
    brand: "",
    color: "",
    size: "",
  },
  isFiltered: false,
  isFilterApplied: false,
};

export const loadFilters = createAsyncThunk<
  FiltersReturn,
  void,
  AsyncThunkConfig<any>
>(
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

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addToFilters(state, action: PayloadAction<FilterOptionsPayload>) {
      const { filterName, filterValue } = action.payload;

      if (state.selectedFilters[filterName as keyof SelectedFilters] === "") {
        state.selectedFilters[filterName as keyof SelectedFilters] =
          filterValue;
      } else {
        state.selectedFilters[
          filterName as keyof SelectedFilters
        ] += `,${filterValue}`;
      }

      state.isFiltered = true;
    },
    removeFromFilters(state, action: PayloadAction<FilterOptionsPayload>) {
      const { filterName, filterValue } = action.payload;

      const currentFilterString =
        state.selectedFilters[filterName as keyof SelectedFilters];

      if (currentFilterString === undefined || currentFilterString === "")
        return;

      if (
        state.selectedFilters[filterName as keyof SelectedFilters].includes(",")
      ) {
        const newFilterString = removeFilterFromFilterString(
          currentFilterString,
          filterValue
        );

        if (newFilterString === "") return;

        state.selectedFilters[filterName as keyof SelectedFilters] =
          newFilterString;
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
        (filter) =>
          (state.selectedFilters[filter as keyof SelectedFilters] = "")
      );
      state.isFiltered = false;
      state.isFilterApplied = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadFilters.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.filters = {
          allBrands: action.payload.allBrands,
          allColors: action.payload.allColors,
          allSizes: action.payload.allSizes,
        };
      })
      .addCase(loadFilters.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const {
  addToFilters,
  removeFromFilters,
  clearFilters,
  setFiltersApplied,
} = filterSlice.actions;

export default filterSlice.reducer;
