import { usePaymentConfirmationPage } from "../../hooks/usePaymentConfirmationPage/usePaymentConfirmationPage";

import { Button } from "../../styles/buttonStyles";
import { H2, StyledParagraph } from "../../styles/fontStyles";
import { StyledConfirmationBackground } from "./PaymentConfirmationPage.styles";

const PaymentConfirmationPage = () => {
  const { orderStatus, navigate } = usePaymentConfirmationPage();

  return (
    <StyledConfirmationBackground>
      {orderStatus === "success" && (
        <>
          <H2>Thank you!</H2>
          <StyledParagraph>
            Your order has successfully completed, you will receive a confirmation email
            shortly.
          </StyledParagraph>
          <Button type="primary" onClick={() => navigate("/")}>
            Continue Shopping
          </Button>
        </>
      )}
      {(!orderStatus || orderStatus === "failed") && (
        <>
          <H2>I'm Sorry</H2>
          <StyledParagraph>An unknown error has occurred.</StyledParagraph>
          <Button type="primary" onClick={() => navigate("/")}>
            Continue Shopping
          </Button>
        </>
      )}
    </StyledConfirmationBackground>
  );
};

export default PaymentConfirmationPage;
