import { useNavigate } from "react-router-dom";

import { CartItem } from "../../../../domain/models/CartItem";

import Button from "../../../common/components/Button/Button";
import { CartItemInfo } from "../../../common/components/CartItemInfo";

import { H3, SpanBold, SpanPrice, StyledParagraph } from "../../../common/styles";
import {
  HeaderCartButtonGroup,
  HeaderCartItemsInfoWrapper,
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

  return (
    <HeaderCartPreview>
      <H3 data-testid="CartCountHeading">{`${cartCount} ${
        cartCount > 1 ? "items" : "item"
      }.`}</H3>

      <HeaderCartWrapper>
        {cart.map((item) => (
          <HeaderCartItemsInfoWrapper key={item.name}>
            <CartItemInfo item={item} small={true} />
            <SpanPrice>£{item.total.toFixed(2)}</SpanPrice>
          </HeaderCartItemsInfoWrapper>
        ))}
      </HeaderCartWrapper>

      <HeaderCartSubtotalGroup>
        <SpanBold>SubTotal:</SpanBold>
        <SpanPrice data-testid="HeaderCartSubtotal">{`£${cartTotal.toFixed(
          2
        )}`}</SpanPrice>
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
};

export default HeaderCart;
