import { SubmitHandler, useForm } from "react-hook-form";

export type CheckoutAddressFormData = {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state?: string;
  postalCode: string;
};

export const useCheckoutAddressForm = (
  addressData: CheckoutAddressFormData,
  updateAddressData: (formData: CheckoutAddressFormData) => void,
  changeStep: (val: number) => void
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutAddressFormData>({
    defaultValues: {
      firstName: addressData.firstName ?? "",
      lastName: addressData.lastName ?? "",
      address1: addressData.address1 ?? "",
      address2: addressData.address2 ?? "",
      city: addressData.city ?? "",
      state: addressData.state ?? "",
      postalCode: addressData.postalCode ?? "",
    },
  });

  const doSubmit: SubmitHandler<CheckoutAddressFormData> = (formData) => {
    updateAddressData(formData);
    changeStep(3);
  };

  const submitForm = handleSubmit(doSubmit);

  return {
    register,
    submitForm,
    errors,
  };
};
