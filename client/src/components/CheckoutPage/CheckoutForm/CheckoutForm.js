import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../../styles/buttonStyles";
import { SpanError } from "../../../styles/fontStyles";
import {
  StyledInput,
  StyledInputGroup,
  StyledInputsFlexWrapper,
  StyledLabel,
} from "../../../styles/formStyles";
import { StyledCheckoutFormWrapper } from "./CheckoutForm.styles";

const CheckoutForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const doSubmit = async (formData) => {
    const { firstName, lastName, address1, address2, city, state, postalCode } = formData;

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
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

    if (result.error) {
      setError(result.error.message);
    }
  };
  return (
    <StyledCheckoutFormWrapper>
      <form onSubmit={handleSubmit(doSubmit)}>
        <StyledInputsFlexWrapper>
          <StyledInputGroup>
            <StyledLabel htmlFor="firstName">First Name</StyledLabel>
            <StyledInput
              type="text"
              id="firstName"
              {...register("firstName", { required: true, minLength: 2 })}
            />
            {errors.firstName && (
              <SpanError>This field requires at least 2 characters.</SpanError>
            )}
          </StyledInputGroup>

          <StyledInputGroup>
            <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
            <StyledInput
              type="text"
              id="lastName"
              {...register("lastName", { required: true, minLength: 2 })}
            />
            {errors.lastName && (
              <SpanError>This field requires at least 2 characters.</SpanError>
            )}
          </StyledInputGroup>
        </StyledInputsFlexWrapper>

        <StyledInputGroup>
          <StyledLabel htmlFor="address1">Address Line 1</StyledLabel>
          <StyledInput
            type="text"
            id="address1"
            {...register("address1", { required: true })}
          />
          {errors.address1 && <SpanError>This field is required.</SpanError>}
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="address2">Address Line 2</StyledLabel>
          <StyledInput type="text" id="address2" {...register("address2")} />
          {errors.address2 && <SpanError>This field is required.</SpanError>}
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="city">City</StyledLabel>
          <StyledInput type="text" id="city" {...register("city", { required: true })} />
          {errors.city && <SpanError>This field is required.</SpanError>}
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="state">County</StyledLabel>
          <StyledInput type="text" id="state" {...register("state")} />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="postalCode">Postal Code</StyledLabel>
          <StyledInput
            type="text"
            id="postalCode"
            {...register("postalCode", { required: true })}
          />
          {errors.postalCode && <SpanError>This field is required.</SpanError>}
        </StyledInputGroup>

        <PaymentElement />
        {stripe && elements && (
          <>
            <Button $primary $large disabled={loading}>
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} size="lg" spin /> Processing...
                </>
              ) : (
                `Pay £${total / 100}`
              )}
            </Button>
          </>
        )}
        {/* {error && <SpanError>{error}</SpanError>} */}
      </form>
    </StyledCheckoutFormWrapper>
  );
};

export default CheckoutForm;
