import { useNavigate } from "react-router-dom";
import { CartItem } from "../../../../../domain/models/CartItem";

import { Button } from "../../../../common/components/Button";
import { H2 } from "../../../../common/styles";
import { StyledCartHeader } from "./CartHeader.styles";

type CartHeaderProps = {
  cart: CartItem[] | null;
};

const CartHeader = ({ cart }: CartHeaderProps) => {
  const navigate = useNavigate();

  return (
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
  );
};

export default CartHeader;
