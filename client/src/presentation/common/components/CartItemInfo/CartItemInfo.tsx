import { Link } from "react-router-dom";
import { CartItem } from "../../../../domain/models/CartItem";
import { SpanBold, SpanGrey, SpanRegular } from "../../styles";
import {
  CartItemImage,
  CartItemInfoGroup,
  CartItemInfoMainWrapper,
  CartItemInfoWrapper,
} from "./CartItemInfo.styles";

type CartItemInfoProps = {
  small?: boolean;
  item: CartItem;
};

const CartItemInfo = ({ small = false, item }: CartItemInfoProps) => {
  const { id, brand, name, imageUrl, size, color } = item;

  return (
    <CartItemInfoMainWrapper>
      <Link to={`/product/${id}`}>
        <CartItemImage src={imageUrl} alt={name} small={small} />
      </Link>

      <CartItemInfoWrapper>
        <Link to={`/product/${id}`}>
          <SpanBold>{name}</SpanBold>
        </Link>

        {brand && (
          <CartItemInfoGroup small={small}>
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
    </CartItemInfoMainWrapper>
  );
};

export default CartItemInfo;
