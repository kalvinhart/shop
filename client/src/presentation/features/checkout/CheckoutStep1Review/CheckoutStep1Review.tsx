import { CartItem } from "../../../../domain/models/CartItem";
import { Button } from "../../../common/components/Button";
import { H2, StyledParagraph } from "../../../common/styles";
import { OrderSummary } from "../OrderSummary";
import { Step1Wrapper } from "./CheckoutStep1Review.styles";

type Props = {
  cart: CartItem[];
  cartTotal: number;
  changeStep: (val: number) => void;
};

const CheckoutStep1Review = ({ cart, cartTotal, changeStep }: Props) => {
  return (
    <Step1Wrapper>
      <H2>Review Your Order</H2>
      <StyledParagraph>
        Please review your order carefully. If you are happy to proceed, click Next.
      </StyledParagraph>
      <OrderSummary cart={cart} cartTotal={cartTotal} />
      <Button variant="primary" onClick={() => changeStep(2)}>
        Next
      </Button>
    </Step1Wrapper>
  );
};

export default CheckoutStep1Review;
