import { useCheckout } from "../hooks/useCheckout";

import { CartItem } from "../../../../domain/models/CartItem";

import { CheckoutProgress } from "../CheckoutProgress";
import { CheckoutContentWrapper, CheckoutWrapper } from "./Checkout.styles";

type Props = {
  cart: CartItem[];
  cartTotal: number;
  total: number;
};
const Checkout = ({ cart, cartTotal, total }: Props) => {
  const { progressStep, renderStep } = useCheckout({ cart, cartTotal, total });

  return (
    <CheckoutWrapper>
      <CheckoutProgress progressStep={progressStep}></CheckoutProgress>
      <CheckoutContentWrapper>{renderStep(progressStep)}</CheckoutContentWrapper>
    </CheckoutWrapper>
  );
};

export default Checkout;
