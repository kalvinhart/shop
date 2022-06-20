import { useHomePage } from "./hooks/useHomePage";

import ProductContent from "../shared/ProductContent/ProductContent";

const HomePage = () => {
  const { products, productsLoading, productsError } = useHomePage();

  return <ProductContent products={products} productsLoading={productsLoading} />;
};

export default HomePage;
