import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { usePageTitle } from "../../common/hooks/usePageTitle";
import { useProductState } from "../../common/hooks/useProductState";

import { ProductContent } from "../../features/browse-products";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const { loadProducts, productsLoading, products } = useProductState();

  useEffect(() => {
    loadProducts(searchParams);
  }, [searchParams, loadProducts]);

  const categoryName = searchParams.get("category");

  usePageTitle(categoryName || "All Products");

  return <ProductContent products={products} productsLoading={productsLoading} />;
};

export default ProductsPage;
