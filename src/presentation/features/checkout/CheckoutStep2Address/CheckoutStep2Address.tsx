import { Dispatch, SetStateAction } from "react";

import { CheckoutAddressForm } from "../CheckoutAddressForm";
import { CheckoutAddressFormData } from "../hooks/useCheckoutAddressForm";
import { Step2Wrapper } from "./CheckoutStep2Address.styles";
import { H2 } from "../../../common/styles";

type Props = {
  addressData: CheckoutAddressFormData;
  setAddressData: Dispatch<SetStateAction<CheckoutAddressFormData>>;
  changeStep: (val: number) => void;
};

const CheckoutStep2Address = ({ addressData, setAddressData, changeStep }: Props) => {
  return (
    <Step2Wrapper>
      <H2>Delivery Address</H2>
      <CheckoutAddressForm
        addressData={addressData}
        setAddressData={setAddressData}
        changeStep={changeStep}
      />
    </Step2Wrapper>
  );
};

export default CheckoutStep2Address;
