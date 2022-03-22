import { SpanBold } from "../../../styles/fontStyles";
import { StyledSpinner, StyledSpinnerWrapper } from "./Spinner.styles";

const Spinner = () => {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinner />
      <SpanBold>Loading...</SpanBold>
    </StyledSpinnerWrapper>
  );
};

export default Spinner;
