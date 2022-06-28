import { SpanBold, SpanPrice, SpanRegular } from "../../../common/styles";
import { StyledOrderSummaryItemWrapper } from "./OrderSummaryItem.styles";

type OrderSummaryItemProps = {
  item: {
    name: string;
    brand: string;
    qty: number;
    price: number;
    total: number;
  };
};

const OrderSummaryItem = ({
  item: { name, brand, qty, price, total },
}: OrderSummaryItemProps) => {
  return (
    <StyledOrderSummaryItemWrapper>
      <SpanBold data-testid="OrderSummaryItem-Name">{name}</SpanBold>
      <SpanRegular data-testid="OrderSummaryItem-Brand">{brand}</SpanRegular>
      <SpanRegular data-testid="OrderSummaryItem-QtyPrice">{`£${price} x ${qty}`}</SpanRegular>
      <SpanPrice data-testid="OrderSummaryItem-Total">£{total}</SpanPrice>
    </StyledOrderSummaryItemWrapper>
  );
};

export default OrderSummaryItem;
