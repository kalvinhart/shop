import { SpanBold } from "../../styles";
import { StyledSpinner, StyledSpinnerWrapper } from "./Spinner.styles";

type SpinnerProps = {
  testId?: string;
};

const Spinner = ({ testId = "none" }: SpinnerProps) => {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinner />
      <SpanBold data-testid={testId}>Loading...</SpanBold>
    </StyledSpinnerWrapper>
  );
};

export default Spinner;
