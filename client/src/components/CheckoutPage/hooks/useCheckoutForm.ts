import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type CheckoutFormData = {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
};

export const useCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const doSubmit: SubmitHandler<CheckoutFormData> = async (formData) => {
    const { firstName, lastName, address1, address2, city, state, postalCode } = formData;

    if (!stripe || !elements) {
      return;
    }

    setError("");
    setLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // return_url: "https://mernestore.herokuapp.com/confirmation?paymentStatus=success",
        return_url: "http://localhost:3000/confirmation?paymentStatus=success",
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

  const submitForm = handleSubmit(doSubmit);

  return {
    stripe,
    elements,
    register,
    errors,
    submitForm,
    loading,
    error,
  };
};
