import { useCallback } from "react";

import { useAppDispatch } from "../../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../../application/hooks/useAppSelector";
import {
  ProductOptionsPayload,
  updateSearchOptions,
} from "../../../application/slices/productSlice";
import { loadProductDetails } from "../../../application/slices/thunks/productDetailsThunks";
import { loadProducts } from "../../../application/slices/thunks/productThunks";
import { ProductData } from "../../../infrastructure/services/interfaces/IHttpService";

export const useProductState = () => {
  const dispatch = useAppDispatch();
  const {
    count,
    error: productsError,
    loading: productsLoading,
    products,
    searchOptions,
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
    searchOptions,
    detailsError,
    detailsLoading,
    product,
    loadProducts: useCallback(
      (options: ProductData) => {
        dispatch(loadProducts(options));
      },
      [dispatch]
    ),
    updateSearchOptions: useCallback(
      (options: ProductOptionsPayload) => {
        dispatch(updateSearchOptions(options));
      },
      [dispatch]
    ),
    loadProductDetails: useCallback(
      (id: string) => {
        dispatch(loadProductDetails(id));
      },
      [dispatch]
    ),
  };
};
