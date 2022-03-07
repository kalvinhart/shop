import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  StyledAddToCartWrapper,
  StyledPurchaseButtonsWrapper,
  StyledQuantityWrapper,
  StyledQuantityTotalWrapper,
  StyledTotalWrapper,
} from "./AddToCart.styles";
import { Button } from "../../../styles/buttonStyles";
import { H3, SpanPrice } from "../../../styles/fontStyles";
import QuantityPicker from "../../shared/QuantityPicker/QuantityPicker";

const AddToCart = () => {
  return (
    <StyledAddToCartWrapper>
      <StyledQuantityTotalWrapper>
        <StyledQuantityWrapper>
          <H3>Quantity:</H3>
          <QuantityPicker />
        </StyledQuantityWrapper>

        <StyledTotalWrapper>
          <H3>Total:</H3>
          <SpanPrice>£49.99</SpanPrice>
        </StyledTotalWrapper>
      </StyledQuantityTotalWrapper>

      <StyledPurchaseButtonsWrapper>
        <Button primary large>
          Add to Cart
        </Button>
        <Button secondary large>
          <FontAwesomeIcon icon={faHeart} size="lg" />
          Save to Wishlist
        </Button>
      </StyledPurchaseButtonsWrapper>
    </StyledAddToCartWrapper>
  );
};

export default AddToCart;
