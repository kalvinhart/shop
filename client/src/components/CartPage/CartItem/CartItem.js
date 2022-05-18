import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import QuantityPicker from "../../shared/QuantityPicker/QuantityPicker";

import {
  StyledCartButtonsWrapper,
  StyledCartItemContentWrapper,
  StyledCartItemImage,
  StyledCartItemInfoGroup,
  StyledCartItemInfoWrapper,
  StyledCartItemWrapper,
} from "./CartItem.styles";
import { H3, SpanGrey, SpanPrice, SpanRegular } from "../../../styles/fontStyles";

import { Button } from "../../../styles/buttonStyles";
import { useCartItem } from "../../../hooks/useCartItem/useCartItem";

const CartItem = ({ item }) => {
  const {
    id,
    name,
    brand,
    color,
    size,
    imageUrl,
    qty,
    total,
    handleQuantityChange,
    handleRemove,
  } = useCartItem(item);

  return (
    <StyledCartItemWrapper>
      <Link to={`/product/${id}`}>
        <StyledCartItemImage src={imageUrl} alt={name} />
      </Link>

      <StyledCartItemContentWrapper>
        <StyledCartItemInfoWrapper>
          <Link to={`/product/${id}`}>
            <H3>{name}</H3>
          </Link>

          {brand && (
            <StyledCartItemInfoGroup>
              <SpanGrey>Brand: </SpanGrey>
              <SpanRegular>{brand}</SpanRegular>
            </StyledCartItemInfoGroup>
          )}

          {size && (
            <StyledCartItemInfoGroup>
              <SpanGrey>Size: </SpanGrey>
              <SpanRegular>{size}</SpanRegular>
            </StyledCartItemInfoGroup>
          )}

          {color && (
            <StyledCartItemInfoGroup>
              <SpanGrey>Colour: </SpanGrey>
              <SpanRegular>{color}</SpanRegular>
            </StyledCartItemInfoGroup>
          )}
        </StyledCartItemInfoWrapper>

        <StyledCartButtonsWrapper>
          <QuantityPicker quantity={qty} handleQuantityChange={handleQuantityChange} />

          <SpanPrice>£{total}</SpanPrice>
          <Button type="secondary" onClick={handleRemove}>
            <FontAwesomeIcon icon={faTrashAlt} />
            Remove
          </Button>
        </StyledCartButtonsWrapper>
      </StyledCartItemContentWrapper>
    </StyledCartItemWrapper>
  );
};

export default CartItem;
