import { PaymentElement } from "@stripe/react-stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { useCheckoutPaymentForm } from "../hooks/useCheckoutPaymentForm";

import { CheckoutAddressFormData } from "../hooks/useCheckoutAddressForm";

import {
  PaymentOverviewGroup,
  PaymentOverviewWrapper,
  Step3ButtonGroup,
  Step3Wrapper,
} from "./CheckoutStep3Payment.styles";
import { Button } from "../../../common/components/Button";
import { H3, SpanBold, SpanError, SpanPrice, SpanRegular } from "../../../common/styles";

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
      <H3>Confirm Payment</H3>
      <PaymentElement
        options={{
          fields: {
            billingDetails: { address: { postalCode: "never", country: "never" } },
          },
        }}
      />

      <PaymentOverviewWrapper>
        <PaymentOverviewGroup>
          <SpanBold>Subtotal:</SpanBold>
          <SpanRegular>£{`${(total / 100).toFixed(2)}`}</SpanRegular>
        </PaymentOverviewGroup>

        <PaymentOverviewGroup>
          <SpanBold>Shipping:</SpanBold>
          <SpanRegular>£0.00</SpanRegular>
        </PaymentOverviewGroup>

        <PaymentOverviewGroup>
          <SpanBold>Total to pay:</SpanBold>
          <SpanPrice>£{`${(total / 100).toFixed(2)}`}</SpanPrice>
        </PaymentOverviewGroup>
      </PaymentOverviewWrapper>

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
              "Confirm Payment"
            )}
          </Button>
        </Step3ButtonGroup>
      )}
      {error && <SpanError staticPosition>{error}</SpanError>}
    </Step3Wrapper>
  );
};

export default CheckoutStep3Payment;
