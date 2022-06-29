import { useNavigate } from "react-router-dom";
import { Button } from "../../../../common/components/Button";
import { SpanBold, SpanPrice } from "../../../../common/styles";
import { StyledCartSummary } from "./CartSummary.styles";

type CartSummaryProps = {
  cartTotal: number;
};

const CartSummary = ({ cartTotal }: CartSummaryProps) => {
  const navigate = useNavigate();

  return (
    <StyledCartSummary>
      <SpanBold>Subtotal:</SpanBold>
      <SpanPrice data-testid="CartPagePrice">{`£${cartTotal}`}</SpanPrice>
      <Button variant="primary" onClick={() => navigate("/checkout")}>
        Continue to Checkout
      </Button>
    </StyledCartSummary>
  );
};

export default CartSummary;
