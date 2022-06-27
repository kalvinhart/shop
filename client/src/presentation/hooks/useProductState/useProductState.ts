import { useCallback } from "react";

import { useAppDispatch } from "../../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../../application/hooks/useAppSelector";
import {
  addToFilters,
  clearFilters,
  removeFromFilters,
} from "../../../application/slices/productSlice";
import { loadProductDetails } from "../../../application/slices/thunks/productDetailsThunks";
import {
  loadFilters,
  loadProducts,
} from "../../../application/slices/thunks/productThunks";
import { ProductData } from "../../../infrastructure/services/interfaces/IHttpService";

type FiltersParams = {
  filterName: string;
  filterValue: string;
};

export const useProductState = () => {
  const dispatch = useAppDispatch();
  const {
    count,
    error: productsError,
    loading: productsLoading,
    products,
    filters,
    selectedFilters,
    isFiltered,
  } = useAppSelector((state) => state.products);

  const {
    error: detailsError,
    loading: detailsLoading,
    product,
  } = useAppSelector((state) => state.productDetails);

  return {
    count,
    productsError,
    productsLoading,
    products,
    detailsError,
    detailsLoading,
    product,
    filters,
    selectedFilters,
    isFiltered,
    loadProducts: useCallback(
      (options: ProductData) => {
        dispatch(loadProducts(options));
      },
      [dispatch]
    ),
    loadProductDetails: useCallback(
      (id: string) => {
        dispatch(loadProductDetails(id));
      },
      [dispatch]
    ),
    loadFilters: useCallback(() => {
      dispatch(loadFilters());
    }, [dispatch]),
    addToFilters: useCallback(
      (data: FiltersParams) => {
        dispatch(addToFilters(data));
      },
      [dispatch]
    ),
    removeFromFilters: useCallback(
      (data: FiltersParams) => {
        dispatch(removeFromFilters(data));
      },
      [dispatch]
    ),
    clearFilters: useCallback(() => {
      dispatch(clearFilters());
    }, [dispatch]),
  };
};
