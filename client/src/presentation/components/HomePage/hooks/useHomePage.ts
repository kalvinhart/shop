import { useProductState } from "../../../hooks/useProductState/useProductState";

export const useHomePage = () => {
  const { productsLoading, productsError, products } = useProductState();

  return {
    products,
    productsLoading,
    productsError,
  };
};
