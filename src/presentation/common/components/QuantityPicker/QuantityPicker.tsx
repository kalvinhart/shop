import { StyledQuantityButtonsWrapper } from "./QuantityPicker.styles";
import { SpanRegular } from "../../styles";
import Button from "../Button/Button";

type QuantityPickerProps = {
  quantity: number;
  handleQuantityChange: (quantity: number) => void;
};

const QuantityPicker = ({ quantity = 1, handleQuantityChange }: QuantityPickerProps) => {
  return (
    <StyledQuantityButtonsWrapper>
      <Button
        onClick={() => handleQuantityChange(-1)}
        variant="primary"
        size="small"
        disabled={quantity === 1}
      >
        -
      </Button>
      <SpanRegular>{quantity}</SpanRegular>
      <Button onClick={() => handleQuantityChange(1)} variant="primary" size="small">
        +
      </Button>
    </StyledQuantityButtonsWrapper>
  );
};

export default QuantityPicker;
