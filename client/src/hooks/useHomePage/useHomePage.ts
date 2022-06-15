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
      //Reshape the object to match API enpoint
      const requestOptions = {
        options: { ...searchOptions },
        sortBy: searchOptions.sortBy ?? "",
      };

      if (requestOptions.options.sortBy) {
        delete requestOptions.options.sortBy;
      }
      dispatch(loadProducts(requestOptions));
    } 
  }, [searchOptions, dispatch]);

  return {
    products,
    productsLoading,
    productsError,
  };
};
