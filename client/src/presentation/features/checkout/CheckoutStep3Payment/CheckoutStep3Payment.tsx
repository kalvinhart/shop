import { PaymentElement } from "@stripe/react-stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { useCheckoutPaymentForm } from "../hooks/useCheckoutPaymentForm";

import { CheckoutAddressFormData } from "../hooks/useCheckoutAddressForm";

import {
  PaymentOverviewGroup,
  PaymentOverviewWrapper,
  PaymentWrapper,
  Step3ButtonGroup,
  Step3Wrapper,
} from "./CheckoutStep3Payment.styles";
import { Button } from "../../../common/components/Button";
import { H2, SpanBold, SpanError, SpanPrice, SpanRegular } from "../../../common/styles";

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
      <H2>Confirm Payment</H2>
      <PaymentWrapper>
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

            <Button variant="secondary" onClick={() => changeStep(2)}>
              Back
            </Button>
          </Step3ButtonGroup>
        )}
        {error && <SpanError staticPosition>{error}</SpanError>}
      </PaymentWrapper>
    </Step3Wrapper>
  );
};

export default CheckoutStep3Payment;
