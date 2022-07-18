import { useProductPage } from "./hooks/useProductPage";
import { usePageTitle } from "../../common/hooks/usePageTitle";

import { ProductDetails } from "../../features/display-product/ProductDetails";
import { Spinner } from "../../common/components/Spinner";
import { RecentlyViewed } from "../../features/recently-viewed/components/RecentlyViewed";

const ProductPage = () => {
  const { product, detailsLoading } = useProductPage();

  usePageTitle(product.name || "Loading...");

  return (
    <>
      {detailsLoading ? (
        <Spinner testId="ProductPageSpinner" />
      ) : (
        <>
          <ProductDetails product={product} />
          <RecentlyViewed />
        </>
      )}
    </>
  );
};

export default ProductPage;
