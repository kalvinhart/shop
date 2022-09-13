import { useState } from "react";
import { CartItem } from "../../../../domain/models/CartItem";
import { CheckoutStep1Review } from "../CheckoutStep1Review";
import { CheckoutStep2Address } from "../CheckoutStep2Address";
import { CheckoutStep3Payment } from "../CheckoutStep3Payment";
import { CheckoutAddressFormData } from "./useCheckoutAddressForm";

type Props = {
  cart: CartItem[];
  cartTotal: number;
  total: number;
};
export const useCheckout = ({ cart, cartTotal, total }: Props) => {
  const [progressStep, setProgressStep] = useState(1);
  const [addressData, setAddressData] = useState<CheckoutAddressFormData>({
    firstName: "",
    lastName: "",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleChangeStep = (val: number) => {
    setProgressStep(val);
  };

  const renderStep = (step: number): JSX.Element | null => {
    switch (step) {
      case 1:
        return (
          <CheckoutStep1Review
            cart={cart}
            cartTotal={cartTotal}
            changeStep={handleChangeStep}
          />
        );
      case 2:
        return (
          <CheckoutStep2Address
            addressData={addressData}
            setAddressData={setAddressData}
            changeStep={handleChangeStep}
          />
        );
      case 3:
        return (
          <CheckoutStep3Payment
            total={total}
            addressData={addressData}
            changeStep={handleChangeStep}
          />
        );
      default:
        return null;
    }
  };

  return {
    progressStep,
    renderStep,
  };
};
