import { useCallback } from "react";

import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../../app/hooks/useAppSelector";

import { loadProductDetails } from "../../../app/slices/thunks/productDetailsThunks";
import { loadProducts } from "../../../app/slices/thunks/productThunks";

export const useProductState = () => {
  const dispatch = useAppDispatch();
  const {
    pagination,
    error: productsError,
    loading: productsLoading,
    products,
  } = useAppSelector((state) => state.products);

  const {
    error: detailsError,
    loading: detailsLoading,
    product,
  } = useAppSelector((state) => state.productDetails);

  return {
    count: pagination.resultsCount,
    productsError,
    productsLoading,
    products,
    detailsError,
    detailsLoading,
    product,
    pagination,
    loadProducts: useCallback(
      (options: URLSearchParams) => {
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
  };
};
