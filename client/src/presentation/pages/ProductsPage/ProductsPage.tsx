import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";

import { usePageTitle } from "../../common/hooks/usePageTitle";
import { useProductState } from "../../common/hooks/useProductState";

import { ProductContent } from "../../features/browse-products";
import { clearFilters } from "../../features/filters/slice/filtersSlice";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { loadProducts, productsLoading, products } = useProductState();

  useEffect(() => {
    loadProducts(searchParams);

    if (Array.from(searchParams.entries()).length === 0) {
      dispatch(clearFilters());
    }
  }, [searchParams, loadProducts, dispatch]);

  const categoryName = searchParams.get("category");

  usePageTitle(categoryName || "All Products");

  return <ProductContent products={products} productsLoading={productsLoading} />;
};

export default ProductsPage;
