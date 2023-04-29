import Skeleton from "react-loading-skeleton";
import { H3, StyledParagraph } from "../../../common/styles";
import { SideBarBackground } from "./SideBar.styles";

const SideBarSkeleton = () => {
  return (
    <SideBarBackground>
      <H3>
        <Skeleton height={50} />
      </H3>
      <H3>
        <Skeleton height={50} />
      </H3>
      <StyledParagraph>
        <Skeleton count={8} />
      </StyledParagraph>

      <StyledParagraph>
        <Skeleton count={8} />
      </StyledParagraph>

      <StyledParagraph>
        <Skeleton count={8} />
      </StyledParagraph>
    </SideBarBackground>
  );
};

export default SideBarSkeleton;
