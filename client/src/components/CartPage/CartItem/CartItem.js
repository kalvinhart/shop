import QuantityPicker from "../../shared/QuantityPicker/QuantityPicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import {
  StyledCartButtonsWrapper,
  StyledCartItemImage,
  StyledCartItemInfoGroup,
  StyledCartItemInfoWrapper,
  StyledCartItemWrapper,
} from "./CartItem.styles";
import { H3, SpanGrey, SpanPrice, SpanRegular } from "../../../styles/fontStyles";

import { Button } from "../../../styles/buttonStyles";

const CartItem = ({ item }) => {
  const { _id, name, brand, imageUrl, size, color, qty, price } = item;
  return (
    <StyledCartItemWrapper>
      <StyledCartItemImage src={imageUrl} alt={name} />

      <StyledCartItemInfoWrapper>
        <H3>{name}</H3>

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
        <QuantityPicker />

        <SpanPrice>£{price}</SpanPrice>
        <Button secondary>
          <FontAwesomeIcon icon={faTrashAlt} />
          Remove
        </Button>
      </StyledCartButtonsWrapper>
    </StyledCartItemWrapper>
  );
};

export default CartItem;
