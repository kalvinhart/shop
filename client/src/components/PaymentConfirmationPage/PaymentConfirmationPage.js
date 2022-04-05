import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import PageWrapper from "../shared/PageWrapper/PageWrapper";
import Container from "../shared/Container/Container";
import { Button } from "../../styles/buttonStyles";
import { H2, StyledParagraph } from "../../styles/fontStyles";
import { StyledConfirmationBackground } from "./PaymentConfirmationPage.styles";

const PaymentConfirmationPage = () => {
  const location = useLocation();
  const [orderStatus, setOrderStatus] = useState();

  useEffect(() => {
    const paymentStatus = new URLSearchParams(location.search).get("paymentStatus");
    setOrderStatus(paymentStatus);
  }, []);

  return (
    <PageWrapper>
      <Container>
        <StyledConfirmationBackground>
          {orderStatus === "success" && (
            <>
              <H2>Thank you!</H2>
              <StyledParagraph>
                Your order has successfully completed, you will receive a confirmation
                email shortly.
              </StyledParagraph>
              <Button as={Link} to="/" $primary>
                Continue Shopping
              </Button>
            </>
          )}
          {(!orderStatus || orderStatus === "failed") && (
            <>
              <H2>I'm Sorry</H2>
              <StyledParagraph>An unknown error has occurred.</StyledParagraph>
              <Button as={Link} to="/" $primary>
                Continue Shopping
              </Button>
            </>
          )}
        </StyledConfirmationBackground>
      </Container>
    </PageWrapper>
  );
};

export default PaymentConfirmationPage;
