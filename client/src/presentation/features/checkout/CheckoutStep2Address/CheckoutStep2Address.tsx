import { Dispatch, SetStateAction } from "react";
import { CheckoutAddressForm } from "../CheckoutAddressForm";
import { CheckoutAddressFormData } from "../hooks/useCheckoutAddressForm";

type Props = {
  addressData: CheckoutAddressFormData;
  setAddressData: Dispatch<SetStateAction<CheckoutAddressFormData>>;
  changeStep: (val: number) => void;
};

const CheckoutStep2Address = ({ addressData, setAddressData, changeStep }: Props) => {
  return (
    <CheckoutAddressForm
      addressData={addressData}
      setAddressData={setAddressData}
      changeStep={changeStep}
    />
  );
};

export default CheckoutStep2Address;
