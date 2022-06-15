import { SpanBold, SpanPrice, SpanRegular } from "../../../styles/fontStyles";
import { StyledOrderSummaryItemWrapper } from "./OrderSummaryItem.styles";

type OrderSummaryItemProps = {
  item: {
    name: string;
    brand: string;
    qty: number;
    price: number;
    total: number;
  }
}

const OrderSummaryItem = ({ item: { name, brand, qty, price, total } }: OrderSummaryItemProps) => {
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
