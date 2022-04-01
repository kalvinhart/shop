import { useSelector } from "react-redux";

import { H3, SpanBold, SpanPrice } from "../../../styles/fontStyles";
import OrderSummaryItem from "../OrderSummaryItem/OrderSummaryItem";
import {
  StyledOrderSummaryTotalWrapper,
  StyledOrderSummaryWrapper,
} from "./OrderSummary.styles";

const OrderSummary = () => {
  const { cart, cartTotal } = useSelector((state) => state.cart);
  return (
    <StyledOrderSummaryWrapper>
      <H3>Order Summary:</H3>
      {cart.map((item) => (
        <OrderSummaryItem item={item} />
      ))}
      <StyledOrderSummaryTotalWrapper>
        <SpanBold>Total:</SpanBold>
        <SpanPrice>£{cartTotal}</SpanPrice>
      </StyledOrderSummaryTotalWrapper>
    </StyledOrderSummaryWrapper>
  );
};

export default OrderSummary;
