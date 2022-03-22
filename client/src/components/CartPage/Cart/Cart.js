import { H2 } from "../../../styles/fontStyles";
import CartDetails from "../CartDetails/CartDetails";
import OrderSummary from "../OrderSummary/OrderSummary";
import { StyledCartWrapper } from "./Cart.styles";

const Cart = ({ cart }) => {
  return (
    <StyledCartWrapper>
      <H2>Your Cart</H2>
      <CartDetails cart={cart} />
      {cart && cart.length > 0 && <OrderSummary />}
    </StyledCartWrapper>
  );
};

export default Cart;
