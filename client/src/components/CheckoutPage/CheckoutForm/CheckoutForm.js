import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Button } from "../../../styles/buttonStyles";
import { SpanError } from "../../../styles/fontStyles";
import { StyledCheckoutFormWrapper } from "./CheckoutForm.styles";

const CheckoutForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success",
      },
    });

    setLoading(false);

    if (result.error) {
      setError(result.error.message);
    }
  };
  return (
    <StyledCheckoutFormWrapper>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        {stripe && elements && (
          <>
            <Button $primary disabled={loading}>
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
        {error && <SpanError>{error}</SpanError>}
      </form>
    </StyledCheckoutFormWrapper>
  );
};

export default CheckoutForm;
