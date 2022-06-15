import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { useCartItem } from "../hooks/useCartItem";

import { CartItem as CartItemModel } from "../../../../domain/models/CartItem";

import QuantityPicker from "../../shared/QuantityPicker/QuantityPicker";
import Button from "../../shared/Button/Button";

import {
  StyledCartButtonsWrapper,
  StyledCartItemContentWrapper,
  StyledCartItemImage,
  StyledCartItemInfoGroup,
  StyledCartItemInfoWrapper,
  StyledCartItemWrapper,
} from "./CartItem.styles";
import { H3, SpanGrey, SpanPrice, SpanRegular } from "../../../styles/fontStyles";


type CartItemProps = {
  item: CartItemModel;
}

const CartItem = ({ item }: CartItemProps) => {
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
          <Button variant="secondary" onClick={handleRemove}>
            <FontAwesomeIcon icon={faTrashAlt} />
            Remove
          </Button>
        </StyledCartButtonsWrapper>
      </StyledCartItemContentWrapper>
    </StyledCartItemWrapper>
  );
};

export default CartItem;
