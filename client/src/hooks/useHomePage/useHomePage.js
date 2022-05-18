import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../actions/productActions";

export const useHomePage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.products);
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
