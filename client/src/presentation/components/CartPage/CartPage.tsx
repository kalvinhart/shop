import { useCartPage } from "./hooks/useCartPage";
import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";

import NoCartItems from "./NoCartItems/NoCartItems";
import CartItem from "../shared/CartItem/CartItem";

import { H2, SpanBold, SpanPrice } from "../../styles/fontStyles";
import {
  StyledCartWrapper,
  StyledCartHeader,
  StyledCartSummary,
} from "./CartPage.styles";
import Button from "../shared/Button/Button";

const CartPage = () => {
  const { cart, cartTotal, navigate } = useCartPage();

  usePageTitle("Shopping Cart");

  return (
    <>
      <StyledCartWrapper>
        <StyledCartHeader>
          <H2>Your Cart</H2>
          {cart && cart.length > 3 && (
            <Button
              className="mobileHidden"
              variant="primary"
              onClick={() => navigate("/checkout")}
            >
              Continue to Checkout
            </Button>
          )}
        </StyledCartHeader>

        {cart && cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <CartItem key={item.name} item={item} />
            ))}
            <StyledCartSummary>
              <SpanBold>Subtotal:</SpanBold>
              <SpanPrice data-testid="CartPagePrice">{`£${cartTotal}`}</SpanPrice>
              <Button variant="primary" onClick={() => navigate("/checkout")}>
                Continue to Checkout
              </Button>
            </StyledCartSummary>
          </>
        ) : (
          <NoCartItems />
        )}
      </StyledCartWrapper>
    </>
  );
};

export default CartPage;
