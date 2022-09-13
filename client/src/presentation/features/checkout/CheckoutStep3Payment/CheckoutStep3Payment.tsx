import { PaymentElement } from "@stripe/react-stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { useCheckoutPaymentForm } from "../hooks/useCheckoutPaymentForm";

import { CheckoutAddressFormData } from "../hooks/useCheckoutAddressForm";

import { Step3ButtonGroup, Step3Wrapper } from "./CheckoutStep3Payment.styles";
import { Button } from "../../../common/components/Button";
import { SpanError } from "../../../common/styles";

type Props = {
  total: number;
  addressData: CheckoutAddressFormData;
  changeStep: (val: number) => void;
};
const CheckoutStep3Payment = ({ total, addressData, changeStep }: Props) => {
  const { stripe, elements, loading, error, handleMakePayment } =
    useCheckoutPaymentForm();

  return (
    <Step3Wrapper>
      <PaymentElement />
      {stripe && elements && (
        <Step3ButtonGroup>
          <Button variant="secondary" onClick={() => changeStep(2)}>
            Back
          </Button>
          <Button
            variant="primary"
            size="large"
            disabled={loading}
            onClick={() => {
              handleMakePayment(addressData);
            }}
          >
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} size="lg" spin /> Processing...
              </>
            ) : (
              `Pay £${(total / 100).toFixed(2)}`
            )}
          </Button>
        </Step3ButtonGroup>
      )}
      {error && <SpanError staticPosition>{error}</SpanError>}
    </Step3Wrapper>
  );
};

export default CheckoutStep3Payment;
