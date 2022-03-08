import CartItem from "../CartItem/CartItem";
import { StyledCartDetailsWrapper } from "./CartDetails.styles";

const CartDetails = ({ cart }) => {
  return (
    <StyledCartDetailsWrapper>
      {cart.length > 0 ? cart.map((item) => <CartItem item={item} />) : "no items"}
    </StyledCartDetailsWrapper>
  );
};

export default CartDetails;
