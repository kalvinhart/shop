import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useProductState } from "../../hooks/useProductState/useProductState";

import ProductContent from "../shared/ProductContent/ProductContent";

import { formatSearchParamsForRequest } from "../../utils/formatSearchParams";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const { loadProducts, productsLoading, products } = useProductState();

  useEffect(() => {
    const filterOptions = formatSearchParamsForRequest(searchParams);

    loadProducts(filterOptions);
  }, [searchParams, loadProducts]);

  return <ProductContent products={products} productsLoading={productsLoading} />;
};

export default ProductsPage;
