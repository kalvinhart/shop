import { useCallback } from "react";

import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../../app/hooks/useAppSelector";

import { loadProductDetails } from "../../../app/slices/thunks/productDetailsThunks";
import { loadProducts } from "../../../app/slices/thunks/productThunks";

import { ProductData } from "../../../../infrastructure/services/interfaces/IHttpService";

export const useProductState = () => {
  const dispatch = useAppDispatch();
  const {
    count,
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
    count,
    productsError,
    productsLoading,
    products,
    detailsError,
    detailsLoading,
    product,
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
  };
};
