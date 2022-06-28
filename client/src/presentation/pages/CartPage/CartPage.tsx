import { useCartPage } from "./hooks/useCartPage";
import { usePageTitle } from "../../common/hooks/usePageTitle";

import NoCartItems from "../../features/cart/components/NoCartItems/NoCartItems";
import { CartItem } from "../../common/components/CartItem";
import { Button } from "../../common/components/Button";

import { H2, SpanBold, SpanPrice } from "../../common/styles";
import {
  StyledCartWrapper,
  StyledCartHeader,
  StyledCartSummary,
} from "./CartPage.styles";

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
