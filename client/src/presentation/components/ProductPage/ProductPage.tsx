import { useProductPage } from "./hooks/useProductPage";

import ProductDetails from "./ProductDetails/ProductDetails";
import Spinner from "../shared/Spinner/Spinner";

const ProductPage = () => {
  const { detailsError, product, detailsLoading } = useProductPage();

  return (
    <>
      {detailsLoading ? (
        <Spinner testId="ProductPageTest" />
      ) : (
        <ProductDetails product={product} />
      )}
    </>
  );
};

export default ProductPage;
