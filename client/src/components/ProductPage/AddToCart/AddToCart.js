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

const AddToCart = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity((prev) => prev + value);
  };

  const handleAddToCart = () => {
    const { _id, brand, color, name, price, size } = product;
    const itemToAdd = {
      id: _id,
      brand,
      color,
      name,
      price,
      size,
      qty: quantity,
    };

    addToCart(itemToAdd);
  };

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
          <SpanPrice>£{product.price}</SpanPrice>
        </StyledTotalWrapper>
      </StyledQuantityTotalWrapper>

      <StyledPurchaseButtonsWrapper>
        <Button onClick={handleAddToCart} $primary $large>
          Add to Cart
        </Button>
        <Button $secondary $large>
          <FontAwesomeIcon icon={faHeart} size="lg" />
          Save to Wishlist
        </Button>
      </StyledPurchaseButtonsWrapper>
    </StyledAddToCartWrapper>
  );
};

export default AddToCart;
