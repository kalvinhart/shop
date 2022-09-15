import { useNavigate } from "react-router-dom";
import { Button } from "../../../../common/components/Button";
import { SpanBold, SpanPrice } from "../../../../common/styles";
import { StyledCartSummary, SummarySpanGroup } from "./CartSummary.styles";

type CartSummaryProps = {
  cartTotal: number;
};

const CartSummary = ({ cartTotal }: CartSummaryProps) => {
  const navigate = useNavigate();

  return (
    <StyledCartSummary>
      <SummarySpanGroup>
        <SpanBold>Delivery:</SpanBold>
        <SpanPrice>£0.00</SpanPrice>
      </SummarySpanGroup>

      <SummarySpanGroup>
        <SpanBold>Subtotal:</SpanBold>
        <SpanPrice data-testid="CartPagePrice">{`£${cartTotal.toFixed(2)}`}</SpanPrice>
      </SummarySpanGroup>

      <Button variant="primary" onClick={() => navigate("/checkout")}>
        Continue to Checkout
      </Button>
    </StyledCartSummary>
  );
};

export default CartSummary;
