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

import HorizonImage from "../../../Horizon-II-Forbidden-West-Cover-Art.png";
import { Button } from "../../../styles/buttonStyles";

const CartItem = () => {
  return (
    <StyledCartItemWrapper>
      <StyledCartItemImage src={HorizonImage} alt="" />

      <StyledCartItemInfoWrapper>
        <H3>Product Name</H3>

        <StyledCartItemInfoGroup>
          <SpanGrey>Brand: </SpanGrey>
          <SpanRegular>Brand</SpanRegular>
        </StyledCartItemInfoGroup>

        <StyledCartItemInfoGroup>
          <SpanGrey>Size: </SpanGrey>
          <SpanRegular>Size</SpanRegular>
        </StyledCartItemInfoGroup>

        <StyledCartItemInfoGroup>
          <SpanGrey>Colour: </SpanGrey>
          <SpanRegular>Colour</SpanRegular>
        </StyledCartItemInfoGroup>
      </StyledCartItemInfoWrapper>

      <StyledCartButtonsWrapper>
        <QuantityPicker />

        <SpanPrice>£49.99</SpanPrice>
        <Button secondary>
          <FontAwesomeIcon icon={faTrashAlt} />
          Remove
        </Button>
      </StyledCartButtonsWrapper>
    </StyledCartItemWrapper>
  );
};

export default CartItem;
