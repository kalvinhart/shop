import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitForm = handleSubmit(doSubmit);

  const doSubmit = async (formData) => {
    const { firstName, lastName, address1, address2, city, state, postalCode } = formData;

    if (!stripe || !elements) {
      return;
    }

    setError("");
    setLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://mernestore.herokuapp.com/confirmation?paymentStatus=success",
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
      setError(result.error.message);
    } else {
      setError("An unexpected error has occurred.");
    }
  };

  return {
    stripe,
    elements,
    register,
    errors,
    submitForm: () => submitForm(),
    loading,
    error,
  };
};
