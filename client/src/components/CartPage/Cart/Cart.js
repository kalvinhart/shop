import { Link } from "react-router-dom";
import NoCartItems from "../../shared/NoCartItems/NoCartItems";
import CartItem from "../CartItem/CartItem";

import { H2, SpanBold, SpanPrice } from "../../../styles/fontStyles";
import { StyledCartWrapper, StyledCartHeader, StyledCartSummary } from "./Cart.styles";
import { Button } from "../../../styles/buttonStyles";

const Cart = ({ cart: { cart, cartTotal } }) => {
  return (
    <>
      <StyledCartWrapper>
        <StyledCartHeader>
          <H2>Your Cart</H2>
          {cart.length > 3 && (
            <Button $primary as={Link} to="/checkout">
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
              <Button $primary as={Link} to="/checkout">
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

export default Cart;
