import Skeleton from "react-loading-skeleton";
import { SpanRegular } from "../../../common/styles";
import { FiltersBackground, SkeletonWrapper } from "./ResultsHeader.styles";

const ResultsHeaderSkeleton = () => {
  return (
    <FiltersBackground>
      <SkeletonWrapper>
        <SpanRegular>
          <Skeleton width={280} height={40} />
        </SpanRegular>
      </SkeletonWrapper>
    </FiltersBackground>
  );
};

export default ResultsHeaderSkeleton;
