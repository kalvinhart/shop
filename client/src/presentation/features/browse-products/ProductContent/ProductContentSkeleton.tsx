import Skeleton from "react-loading-skeleton";
import { H3, SpanPrice } from "../../../common/styles";
import { CardBackground } from "../ProductCard/ProductCard.styles";

type ProductContentSkeletonProps = {
  numCards: number;
};

const ProductContentSkeleton = ({ numCards }: ProductContentSkeletonProps) => {
  const productCardSkeleton = Array(numCards).fill(0);

  return (
    <>
      {productCardSkeleton.map((_, i) => (
        <CardBackground key={i} data-testid={`products-loading${i + 1}`}>
          <Skeleton height={250} />

          <H3>
            <Skeleton />
          </H3>

          <SpanPrice>
            <Skeleton />
          </SpanPrice>

          <Skeleton />
        </CardBackground>
      ))}
    </>
  );
};

export default ProductContentSkeleton;
