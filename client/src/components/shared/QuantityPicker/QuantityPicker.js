import { StyledQuantityButtonsWrapper } from "./QuantityPicker.styles";
import { Button } from "../../../styles/buttonStyles";
import { H3, SpanRegular } from "../../../styles/fontStyles";

const QuantityPicker = () => {
  return (
    <StyledQuantityButtonsWrapper>
      <Button primary>-</Button>
      <SpanRegular>1</SpanRegular>
      <Button primary>+</Button>
    </StyledQuantityButtonsWrapper>
  );
};

export default QuantityPicker;
