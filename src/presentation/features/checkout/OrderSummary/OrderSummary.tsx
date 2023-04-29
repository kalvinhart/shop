import { CartItem } from "../../../../domain/models/CartItem";

import { OrderSummaryItem } from "../OrderSummaryItem";

import { H3, SpanBold, SpanPrice } from "../../../common/styles";
import {
  StyledOrderSummaryTotalWrapper,
  StyledOrderSummaryWrapper,
} from "./OrderSummary.styles";

type OrderSummaryProps = {
  cart: CartItem[];
  cartTotal: number;
};

const OrderSummary = ({ cart, cartTotal }: OrderSummaryProps) => {
  return (
    <StyledOrderSummaryWrapper>
      <H3>Order Summary:</H3>
      {cart.map((item) => (
        <OrderSummaryItem key={item.name} item={item} />
      ))}
      <StyledOrderSummaryTotalWrapper>
        <SpanBold>Total:</SpanBold>
        <SpanPrice data-testid="OrderSummaryTotal">£{cartTotal.toFixed(2)}</SpanPrice>
      </StyledOrderSummaryTotalWrapper>
    </StyledOrderSummaryWrapper>
  );
};

export default OrderSummary;
