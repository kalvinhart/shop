import { useHomePage } from "./hooks/useHomePage";
import { usePageTitle } from "../../common/hooks/usePageTitle";

import { ProductContent } from "../../features/browse-products";
import { useFilterState } from "../../common/hooks/useFilterState/useFilterState";

const HomePage = () => {
  const { products, productsLoading, productsError } = useHomePage();
  const { loading: filtersLoading } = useFilterState();

  usePageTitle("Home");

  return (
    <ProductContent
      products={products}
      productsLoading={productsLoading}
      filtersLoading={filtersLoading}
    />
  );
};

export default HomePage;
