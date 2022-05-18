import { useState } from "react";
import { useDispatch } from "react-redux";
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
import { useAddToCart } from "../../../hooks/useAddToCart/useAddToCart";

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
          type="primary"
          onClick={handleAddToCart}
          disabled={stockQty === 0 || quantity > stockQty}
          $large
        >
          Add to Cart
        </Button>
        <Button type="secondary" $large>
          <FontAwesomeIcon icon={faHeart} size="lg" />
          Save to Wishlist
        </Button>
      </StyledPurchaseButtonsWrapper>
    </StyledAddToCartWrapper>
  );
};

export default AddToCart;
