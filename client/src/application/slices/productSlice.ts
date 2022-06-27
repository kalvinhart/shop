import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../domain/models/Product";
import { ProductData } from "../../infrastructure/services/interfaces/IHttpService";
import { Filters } from "../../infrastructure/services/interfaces/IProductService";
import { loadFilters, loadProducts } from "./thunks/productThunks";

type ProductState = {
  loading: boolean;
  error: boolean;
  count: number;
  products: Product[];
  searchOptions?: ProductData;
  filters: {
    allBrands: Filters[];
    allColors: Filters[];
    allSizes: Filters[];
  } | null;
};

export type ProductOptionsPayload = {
  option: string;
  newOption?: string;
};

const initialState: ProductState = {
  loading: true,
  error: false,
  count: 0,
  products: [],
  searchOptions: {},
  filters: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateSearchOptions(state, action: PayloadAction<ProductOptionsPayload> | null) {
      if (action!.payload === null) {
        state.searchOptions = {};
      }

      const { option, newOption } = action!.payload;

      const currentOptions: ProductData = { ...state.searchOptions };

      if (newOption !== "") {
        currentOptions[option as keyof ProductData] = newOption;
        state.searchOptions = currentOptions;
      } else {
        delete currentOptions[option as keyof ProductData];
        state.searchOptions = currentOptions;
      }
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

export const { updateSearchOptions } = productSlice.actions;

export default productSlice.reducer;
