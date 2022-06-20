import { useEffect } from "react";
import { useProductState } from "../../../hooks/useProductState/useProductState";

export const useHomePage = () => {
  const { productsLoading, productsError, products, searchOptions, loadProducts } =
    useProductState();

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
      loadProducts(requestOptions);
    }
  }, [searchOptions, loadProducts]);

  return {
    products,
    productsLoading,
    productsError,
  };
};
