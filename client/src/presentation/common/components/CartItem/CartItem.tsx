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

const CartItem = ({ item, small = false }: CartItemProps) => {
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
    <CartItemWrapper small={small} data-testid="CartItemElement" tabIndex={1}>
      <Link to={`/product/${id}`}>
        <CartItemImage src={imageUrl} alt={name} small={small} />
      </Link>

      <CartItemContentWrapper>
        <CartItemInfoWrapper>
          <Link to={`/product/${id}`}>
            <SpanBold>{name}</SpanBold>
          </Link>

          {brand && (
            <CartItemInfoGroup small={small}>
              <SpanGrey>Brand: </SpanGrey>
              <SpanRegular>{brand}</SpanRegular>
            </CartItemInfoGroup>
          )}

          {size && (
            <CartItemInfoGroup small={small}>
              <SpanGrey>Size: </SpanGrey>
              <SpanRegular>{size}</SpanRegular>
            </CartItemInfoGroup>
          )}

          {color && (
            <CartItemInfoGroup small={small}>
              <SpanGrey>Colour: </SpanGrey>
              <SpanRegular>{color}</SpanRegular>
            </CartItemInfoGroup>
          )}
        </CartItemInfoWrapper>

        <CartButtonsWrapper>
          <QuantityPicker quantity={qty} handleQuantityChange={handleQuantityChange} />

          <SpanPrice data-testid="CartItemPrice">£{total}</SpanPrice>
          <Button
            variant="trash"
            onClick={handleRemove}
            aria-label="Remove from Cart"
            dataName="removeButton"
            testId="CartItemRemoveButton"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
        </CartButtonsWrapper>
      </CartItemContentWrapper>
    </CartItemWrapper>
  );
};

export default CartItem;
