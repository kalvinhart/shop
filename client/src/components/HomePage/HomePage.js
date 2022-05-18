import { useHomePage } from "../../hooks/useHomePage/useHomePage";

import ProductContent from "./ProductContent/ProductContent";

const HomePage = () => {
  const { products, productsLoading, productsError } = useHomePage();

  return <ProductContent products={products} productsLoading={productsLoading} />;
};

export default HomePage;
