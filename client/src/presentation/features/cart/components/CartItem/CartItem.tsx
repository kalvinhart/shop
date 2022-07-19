import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { useCartItem } from "../..";

import { CartItem as CartItemModel } from "../../../../../domain/models/CartItem";

import { CartItemInfo } from "../../../../common/components/CartItemInfo";
import QuantityPicker from "../../../../common/components/QuantityPicker/QuantityPicker";
import Button from "../../../../common/components/Button/Button";

import {
  CartButtonsWrapper,
  CartItemContentWrapper,
  CartItemWrapper,
} from "./CartItem.styles";
import { SpanPrice, SpanRegular } from "../../../../common/styles";

type CartItemProps = {
  item: CartItemModel;
  small?: boolean;
};

const CartItem = ({ item, small = false }: CartItemProps) => {
  const { qty, total, handleQuantityChange, handleRemove } = useCartItem(item);

  return (
    <CartItemWrapper small={small} data-testid="CartItemElement" tabIndex={1}>
      <CartItemContentWrapper>
        <CartItemInfo small={small} item={item} />

        <CartButtonsWrapper>
          <QuantityPicker quantity={qty} handleQuantityChange={handleQuantityChange} />

          <SpanPrice data-testid="CartItemPrice">£{total.toFixed(2)}</SpanPrice>
          <Button
            variant="trash"
            onClick={handleRemove}
            aria-label="Remove from Cart"
            dataName="removeButton"
            testId="CartItemRemoveButton"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
            <SpanRegular>Remove</SpanRegular>
          </Button>
        </CartButtonsWrapper>
      </CartItemContentWrapper>
    </CartItemWrapper>
  );
};

export default CartItem;
