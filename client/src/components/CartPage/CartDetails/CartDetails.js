import CartItem from "../CartItem/CartItem";
import { StyledCartDetailsWrapper } from "./CartDetails.styles";

const CartDetails = () => {
  return (
    <StyledCartDetailsWrapper>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </StyledCartDetailsWrapper>
  );
};

export default CartDetails;
