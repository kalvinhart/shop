import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  StyledAddToCartWrapper,
  StyledPurchaseButtonsWrapper,
  StyledQuantityWrapper,
  StyledQuantityTotalWrapper,
  StyledTotalWrapper,
} from "./AddToCart.styles";
import { H3, SpanPrice } from "../../../styles/fontStyles";
import QuantityPicker from "../../shared/QuantityPicker/QuantityPicker";
import { useAddToCart } from "../../../hooks/useAddToCart/useAddToCart";
import Button from "../../shared/Button/Button";

const AddToCart = ({ product }) => {
  const { quantity, price, stockQty, handleQuantityChange, handleAddToCart } =
    useAddToCart(product);

  return (
    <StyledAddToCartWrapper>
      <StyledQuantityTotalWrapper>
        <StyledQuantityWrapper>
          <H3>Quantity:</H3>
          <QuantityPicker
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
          />
        </StyledQuantityWrapper>

        <StyledTotalWrapper>
          <H3>Total:</H3>
          <SpanPrice>£{(quantity * price).toFixed(2)}</SpanPrice>
        </StyledTotalWrapper>
      </StyledQuantityTotalWrapper>

      <StyledPurchaseButtonsWrapper>
        <Button
          variant="primary"
          onClick={handleAddToCart}
          disabled={stockQty === 0 || quantity > stockQty}
          size="large"
        >
          Add to Cart
        </Button>
        <Button variant="secondary" size="large">
          <FontAwesomeIcon icon={faHeart} size="lg" />
          Save to Wishlist
        </Button>
      </StyledPurchaseButtonsWrapper>
    </StyledAddToCartWrapper>
  );
};

export default AddToCart;
