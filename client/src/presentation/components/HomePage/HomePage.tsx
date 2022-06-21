import { useHomePage } from "./hooks/useHomePage";

import ProductContent from "../shared/ProductContent/ProductContent";
import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";

const HomePage = () => {
  const { products, productsLoading, productsError } = useHomePage();

  usePageTitle("Home");

  return <ProductContent products={products} productsLoading={productsLoading} />;
};

export default HomePage;
