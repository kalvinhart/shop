import { useProductPage } from "./hooks/useProductPage";
import { usePageTitle } from "../../common/hooks/usePageTitle";

import { ProductDetails } from "./ProductDetails";
import { Spinner } from "../../common/components/Spinner";

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
