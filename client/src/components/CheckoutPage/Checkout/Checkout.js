import OrderSummary from "../OrderSummary/OrderSummary";
import { StyledCheckoutWrapper } from "./Checkout.styles";

const Checkout = () => {
  return (
    <StyledCheckoutWrapper>
      <OrderSummary />
    </StyledCheckoutWrapper>
  );
};

export default Checkout;
