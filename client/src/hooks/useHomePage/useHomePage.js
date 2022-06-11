import { useEffect } from "react";
import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../application/hooks/useAppSelector";
import { loadProducts } from "../../application/slices/thunks/productThunks";

export const useHomePage = () => {
  const dispatch = useAppDispatch();

  const getProducts = useAppSelector((state) => state.products);
  const {
    loading: productsLoading,
    error: productsError,
    products,
    searchOptions,
  } = getProducts;

  useEffect(() => {
    if (searchOptions) {
      const requestOptions = {
        options: { ...searchOptions },
        sortBy: searchOptions.sortBy ?? "",
      };

      if (requestOptions.options.sortBy) {
        delete requestOptions.options.sortBy;
      }

      dispatch(loadProducts(requestOptions));
    } else {
      dispatch(loadProducts());
    }
  }, [searchOptions]);

  return {
    products,
    productsLoading,
    productsError,
  };
};
