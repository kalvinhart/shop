import Skeleton from "react-loading-skeleton";
import { H2, H3, SpanDescription, SpanPrice, SpanRegular } from "../../../common/styles";
import {
  ProductBackground,
  ProductDescriptionInfo,
  ProductImageWrapper,
  ProductInfoGroup,
  ProductMainInfoWrapper,
} from "../ProductDetails/ProductDetails.styles";

import { ProductMainInfoWrapper as ProductInfoWrapper } from "../ProductMainInfo/ProductMainInfo.styles";

const ProductDetailsSkeleton = () => {
  return (
    <ProductBackground>
      <ProductMainInfoWrapper>
        <Skeleton height={350} wrapper={ProductImageWrapper} />

        <ProductInfoWrapper>
          <H2>
            <Skeleton />
          </H2>

          <SpanPrice>
            <Skeleton />
          </SpanPrice>

          <SpanRegular>
            <Skeleton count={3} />
          </SpanRegular>
        </ProductInfoWrapper>
      </ProductMainInfoWrapper>

      <H3>
        <Skeleton />
      </H3>

      <SpanDescription>
        <Skeleton count={12} />
      </SpanDescription>
    </ProductBackground>
  );
};

export default ProductDetailsSkeleton;
