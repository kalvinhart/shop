import { useProductPage } from "./hooks/useProductPage";
import { usePageTitle } from "../../common/hooks/usePageTitle";

import { ProductDetails } from "../../features/display-product/ProductDetails";
import { RecentlyViewed } from "../../features/recently-viewed/components/RecentlyViewed";
import ProductDetailsSkeleton from "../../features/display-product/ProductDetailsSkeleton/ProductDetailsSkeleton";

const ProductPage = () => {
  const { product, detailsLoading } = useProductPage();

  usePageTitle(product.name || "Loading...");

  return (
    <>
      {detailsLoading ? (
        <ProductDetailsSkeleton />
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
