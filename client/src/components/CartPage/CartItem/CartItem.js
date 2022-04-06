import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import QuantityPicker from "../../shared/QuantityPicker/QuantityPicker";

import {
  StyledCartButtonsWrapper,
  StyledCartItemImage,
  StyledCartItemInfoGroup,
  StyledCartItemInfoWrapper,
  StyledCartItemWrapper,
} from "./CartItem.styles";
import { H3, SpanGrey, SpanPrice, SpanRegular } from "../../../styles/fontStyles";

import { Button } from "../../../styles/buttonStyles";
import { removeFromCart, updateCart } from "../../../actions/cartActions";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, brand, imageUrl, size, color, qty, total } = item;

  const handleQuantityChange = (value) => {
    dispatch(updateCart(id, qty + value));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

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
        <QuantityPicker quantity={qty} handleQuantityChange={handleQuantityChange} />

        <SpanPrice>£{total}</SpanPrice>
        <Button type="secondary" onClick={handleRemove}>
          <FontAwesomeIcon icon={faTrashAlt} />
          Remove
        </Button>
      </StyledCartButtonsWrapper>
    </StyledCartItemWrapper>
  );
};

export default CartItem;
