import { useHomePage } from "./hooks/useHomePage";
import { usePageTitle } from "../../common/hooks/usePageTitle";

import { ProductContent } from "../../features/browse-products";

const HomePage = () => {
  const { products, productsLoading, productsError } = useHomePage();

  usePageTitle("Home");

  return <ProductContent products={products} productsLoading={productsLoading} />;
};

export default HomePage;
