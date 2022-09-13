import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { CheckoutAddressFormData } from "./useCheckoutAddressForm";

export const useCheckoutPaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleMakePayment = async (addressData: CheckoutAddressFormData) => {
    const { firstName, lastName, address1, address2, city, state, postalCode } =
      addressData;

    if (!stripe || !elements) {
      return;
    }

    setError("");
    setLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://mernestore.herokuapp.com/confirmation?paymentStatus=success",
        // return_url: "http://localhost:3000/confirmation?paymentStatus=success",
        shipping: {
          name: `${firstName} ${lastName}`,
          address: {
            line1: address1,
            line2: address2,
            city,
            state,
            postal_code: postalCode,
          },
        },
      },
    });

    setLoading(false);

    if (result.error.type === "card_error" || result.error.type === "validation_error") {
      setError(result.error.message!);
    } else {
      setError("An unexpected error has occurred.");
    }
  };

  return {
    stripe,
    elements,
    handleMakePayment,
    loading,
    error,
  };
};
