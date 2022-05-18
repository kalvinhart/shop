import { useHomePage } from "../../hooks/useHomePage/useHomePage";

import ProductContent from "./ProductContent/ProductContent";

const HomePage = () => {
  const { products, productsLoading, productsError, handleAddToCart } = useHomePage();

  return (
    <ProductContent
      products={products}
      productsLoading={productsLoading}
      addToCart={handleAddToCart}
    />
  );
};

export default HomePage;
