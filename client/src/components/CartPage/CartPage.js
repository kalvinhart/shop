import { useCartPage } from "../../hooks/useCartPage/useCartPage";

import NoCartItems from "../shared/NoCartItems/NoCartItems";
import CartItem from "./CartItem/CartItem";

import { H2, SpanBold, SpanPrice } from "../../styles/fontStyles";
import {
  StyledCartWrapper,
  StyledCartHeader,
  StyledCartSummary,
} from "./CartPage.styles";
import Button from "../shared/Button/Button";

const CartPage = () => {
  const { cart, cartTotal, navigate } = useCartPage();

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
              <SpanPrice>{`£${cartTotal}`}</SpanPrice>
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
