import { useProductPage } from "./hooks/useProductPage";
import { usePageTitle } from "../../common/hooks/usePageTitle";

import { ProductDetails } from "../../features/display-product/ProductDetails";
import { Spinner } from "../../common/components/Spinner";

const ProductPage = () => {
  const { product, detailsLoading } = useProductPage();

  usePageTitle(product.name || "Loading...");

  return (
    <>
      {detailsLoading ? (
        <Spinner testId="ProductPageSpinner" />
      ) : (
        <ProductDetails product={product} />
      )}
    </>
  );
};

export default ProductPage;
