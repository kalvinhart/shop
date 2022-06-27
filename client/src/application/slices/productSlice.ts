import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../domain/models/Product";
import { Filters } from "../../infrastructure/services/interfaces/IProductService";
import { loadFilters, loadProducts } from "./thunks/productThunks";

export type SelectedFilters = {
  brand: string;
  color: string;
  size: string;
};

type ProductState = {
  loading: boolean;
  error: boolean;
  count: number;
  products: Product[];
  filters: {
    allBrands: Filters[];
    allColors: Filters[];
    allSizes: Filters[];
  } | null;
  selectedFilters: SelectedFilters;
  isFiltered: boolean;
};

export type ProductOptionsPayload = {
  option: string;
  newOption?: string;
};

type FilterOptionsPayload = {
  filterName: string;
  filterValue: string;
};

const initialState: ProductState = {
  loading: true,
  error: false,
  count: 0,
  products: [],
  filters: null,
  selectedFilters: {
    brand: "",
    color: "",
    size: "",
  },
  isFiltered: false,
};

const productSlice = createSlice({
  name: "products",
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
        let splitFilterString = currentFilterString.split(",");

        const filterIndex = splitFilterString.findIndex((item) => item === filterValue);

        if (filterIndex === -1) return;

        splitFilterString.splice(filterIndex, 1);

        const newFilterString = splitFilterString.join(",");

        state.selectedFilters[filterName as keyof SelectedFilters] = newFilterString;
      } else {
        state.selectedFilters[filterName as keyof SelectedFilters] = "";
        state.isFiltered = false;
      }
    },
    clearFilters(state) {
      ["brand", "color", "size"].forEach(
        (filter) => (state.selectedFilters[filter as keyof SelectedFilters] = "")
      );
      state.isFiltered = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.count = action.payload.count;
        state.products = action.payload.products;
        state.filters = {
          allBrands: action.payload.allBrands,
          allColors: action.payload.allColors,
          allSizes: action.payload.allSizes,
        };
      })
      .addCase(loadProducts.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.filters = action.payload;
      })
      .addCase(loadFilters.pending, (state, action) => {
        state.error = false;
      })
      .addCase(loadFilters.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { addToFilters, removeFromFilters, clearFilters } = productSlice.actions;

export default productSlice.reducer;
