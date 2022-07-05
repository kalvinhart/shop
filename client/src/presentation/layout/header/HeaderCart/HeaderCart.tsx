import { useNavigate } from "react-router-dom";

import { CartItem } from "../../../../domain/models/CartItem";

import Button from "../../../common/components/Button/Button";
import CartItemPreview from "../../../common/components/CartItem/CartItem";

import { H3, SpanBold, SpanPrice, StyledParagraph } from "../../../common/styles";
import {
  HeaderCartHeaderGroup,
  HeaderCartNoItemsWrapper,
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
    return (
      <HeaderCartNoItemsWrapper>
        <StyledParagraph>You have no items in your cart.</StyledParagraph>
      </HeaderCartNoItemsWrapper>
    );

  const cartPreview = (
    <HeaderCartPreview>
      <HeaderCartHeaderGroup>
        <H3 data-testid="CartCountHeading">{`${cartCount} ${
          cartCount > 1 ? "items" : "item"
        }.`}</H3>
        <Button variant="primary" onClick={() => navigate("/cart")}>
          View Cart
        </Button>
      </HeaderCartHeaderGroup>
      <HeaderCartWrapper>
        {cart.map((item) => (
          <CartItemPreview key={item.name} item={item} small={true} />
        ))}
      </HeaderCartWrapper>

      <HeaderCartSubtotalGroup>
        <SpanBold>SubTotal:</SpanBold>
        <SpanPrice data-testid="HeaderCartSubtotal">{`£${cartTotal}`}</SpanPrice>
      </HeaderCartSubtotalGroup>

      <Button variant="primary" onClick={() => navigate("/checkout")}>
        Go to Checkout
      </Button>
    </HeaderCartPreview>
  );

  return cartPreview;
};

export default HeaderCart;
