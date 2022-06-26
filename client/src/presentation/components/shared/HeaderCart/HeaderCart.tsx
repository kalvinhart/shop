import { useNavigate } from "react-router-dom";

import { CartItem } from "../../../../domain/models/CartItem";

import Button from "../Button/Button";
import CartItemPreview from "../CartItem/CartItem";

import { H3, SpanBold, SpanPrice, StyledParagraph } from "../../../styles/fontStyles";
import {
  HeaderCartButtonGroup,
  HeaderCartPreview,
  HeaderCartSubtotalGroup,
  HeaderCartWrapper,
} from "./HeaderCart.styles";

type HeaderCartProps = {
  cart: CartItem[] | null;
  cartCount: number;
  cartTotal: number;
};

const HeaderCart = ({ cart, cartCount, cartTotal }: HeaderCartProps) => {
  const navigate = useNavigate();

  if (!cart || cart.length === 0)
    return <StyledParagraph>You have no items in your cart.</StyledParagraph>;

  const cartPreview = (
    <HeaderCartPreview>
      <H3>{`${cartCount} ${cartCount > 1 ? "items" : "item"}.`}</H3>
      <HeaderCartWrapper>
        {cart.map((item) => (
          <CartItemPreview key={item.name} item={item} />
        ))}
      </HeaderCartWrapper>

      <HeaderCartSubtotalGroup>
        <SpanBold>SubTotal:</SpanBold>
        <SpanPrice>{`£${cartTotal}`}</SpanPrice>
      </HeaderCartSubtotalGroup>

      <HeaderCartButtonGroup>
        <Button variant="primary" onClick={() => navigate("/cart")}>
          View Cart
        </Button>
        <Button variant="primary" onClick={() => navigate("/checkout")}>
          Go to Checkout
        </Button>
      </HeaderCartButtonGroup>
    </HeaderCartPreview>
  );

  return cartPreview;
};

export default HeaderCart;
