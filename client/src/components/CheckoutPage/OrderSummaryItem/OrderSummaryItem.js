import { SpanBold, SpanPrice, SpanRegular } from "../../../styles/fontStyles";
import { StyledOrderSummaryItemWrapper } from "./OrderSummaryItem.styles";

const OrderSummaryItem = ({ item: { name, brand, qty, price, total } }) => {
  return (
    <StyledOrderSummaryItemWrapper>
      <SpanBold>{name}</SpanBold>
      <SpanRegular>{brand}</SpanRegular>
      <SpanRegular>{`£${price} x ${qty}`}</SpanRegular>
      <SpanPrice>£{total}</SpanPrice>
    </StyledOrderSummaryItemWrapper>
  );
};

export default OrderSummaryItem;
