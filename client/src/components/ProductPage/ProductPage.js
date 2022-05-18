import { useProductPage } from "../../hooks/useProductPage/useProductPage";

import ProductDetails from "./ProductDetails/ProductDetails";
import Spinner from "../shared/Spinner/Spinner";

const ProductPage = () => {
  const { loading, product, error, handleAddToCart } = useProductPage();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ProductDetails product={product} addToCart={handleAddToCart} />
      )}
    </>
  );
};

export default ProductPage;
