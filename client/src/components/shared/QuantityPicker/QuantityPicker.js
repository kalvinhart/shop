import { StyledQuantityButtonsWrapper } from "./QuantityPicker.styles";
import { Button } from "../../../styles/buttonStyles";
import { SpanRegular } from "../../../styles/fontStyles";

const QuantityPicker = ({ quantity = 1, handleQuantityChange }) => {
  return (
    <StyledQuantityButtonsWrapper>
      <Button onClick={() => handleQuantityChange(-1)} $primary disabled={quantity === 1}>
        -
      </Button>
      <SpanRegular>{quantity}</SpanRegular>
      <Button onClick={() => handleQuantityChange(1)} $primary>
        +
      </Button>
    </StyledQuantityButtonsWrapper>
  );
};

export default QuantityPicker;
