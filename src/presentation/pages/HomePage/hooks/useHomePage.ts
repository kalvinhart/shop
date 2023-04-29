import { useProductState } from "../../../common/hooks/useProductState";

export const useHomePage = () => {
  const { productsLoading, productsError, products } = useProductState();

  return {
    products,
    productsLoading,
    productsError,
  };
};
