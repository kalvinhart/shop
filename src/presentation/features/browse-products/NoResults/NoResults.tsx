import { StyledParagraph } from "../../../common/styles";
import { StyledNoResultsWrapper } from "./NoResults.styles";

const NoResults = () => {
  return (
    <StyledNoResultsWrapper>
      <StyledParagraph>
        Unfortunately we could not find any results matching your search.
      </StyledParagraph>
      <StyledParagraph>Please try again.</StyledParagraph>
    </StyledNoResultsWrapper>
  );
};

export default NoResults;
