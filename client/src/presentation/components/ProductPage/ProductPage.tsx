import { useProductPage } from "./hooks/useProductPage";

import ProductDetails from "./ProductDetails/ProductDetails";
import Spinner from "../shared/Spinner/Spinner";
import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";

const ProductPage = () => {
  const { detailsError, product, detailsLoading } = useProductPage();

  usePageTitle(product.name || "Loading...");

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
