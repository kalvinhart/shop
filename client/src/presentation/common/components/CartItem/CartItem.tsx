import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { useCartItem } from "../../../features/cart";

import { CartItem as CartItemModel } from "../../../../domain/models/CartItem";

import QuantityPicker from "../QuantityPicker/QuantityPicker";
import Button from "../Button/Button";

import {
  CartButtonsWrapper,
  CartItemContentWrapper,
  CartItemImage,
  CartItemInfoGroup,
  CartItemInfoWrapper,
  CartItemWrapper,
} from "./CartItem.styles";
import { SpanBold, SpanGrey, SpanPrice, SpanRegular } from "../../styles";

type CartItemProps = {
  item: CartItemModel;
  small?: boolean;
};

const CartItem = ({ item, small }: CartItemProps) => {
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
    <CartItemWrapper data-testid="CartItemElement">
      <Link to={`/product/${id}`}>
        <CartItemImage src={imageUrl} alt={name} />
      </Link>

      <CartItemContentWrapper>
        <CartItemInfoWrapper>
          <Link to={`/product/${id}`}>
            <SpanBold>{name}</SpanBold>
          </Link>

          {brand && (
            <CartItemInfoGroup>
              <SpanGrey>Brand: </SpanGrey>
              <SpanRegular>{brand}</SpanRegular>
            </CartItemInfoGroup>
          )}

          {size && (
            <CartItemInfoGroup>
              <SpanGrey>Size: </SpanGrey>
              <SpanRegular>{size}</SpanRegular>
            </CartItemInfoGroup>
          )}

          {color && (
            <CartItemInfoGroup>
              <SpanGrey>Colour: </SpanGrey>
              <SpanRegular>{color}</SpanRegular>
            </CartItemInfoGroup>
          )}
        </CartItemInfoWrapper>

        <CartButtonsWrapper>
          <QuantityPicker quantity={qty} handleQuantityChange={handleQuantityChange} />

          <SpanPrice data-testid="CartItemPrice">£{total}</SpanPrice>
          <Button variant="secondary" onClick={handleRemove}>
            <FontAwesomeIcon icon={faTrashAlt} />
            Remove
          </Button>
        </CartButtonsWrapper>
      </CartItemContentWrapper>
    </CartItemWrapper>
  );
};

export default CartItem;
