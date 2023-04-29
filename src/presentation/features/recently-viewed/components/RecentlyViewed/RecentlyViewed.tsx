import { useRecentlyViewed } from "../../hooks/useRecentlyViewed";

import { RecentlyViewedWrapper } from "./RecentlyViewed.styles";

import { H3 } from "../../../../common/styles";
import { ProductList } from "../../../../common/components/ProductList";

const RecentlyViewed = () => {
  const { products } = useRecentlyViewed();

  return (
    <RecentlyViewedWrapper>
      <H3>Recently Viewed</H3>
      {products.length > 0 && (
        <ProductList products={products} testId="recently-viewed"></ProductList>
      )}
    </RecentlyViewedWrapper>
  );
};

export default RecentlyViewed;
