import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { clearCart } from "../../actions/cartActions";

import { Button } from "../../styles/buttonStyles";
import { H2, StyledParagraph } from "../../styles/fontStyles";
import { StyledConfirmationBackground } from "./PaymentConfirmationPage.styles";

const PaymentConfirmationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [orderStatus, setOrderStatus] = useState();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paymentStatus = params.get("paymentStatus");
    const paymentIntent = params.get("payment_intent");
    if (paymentStatus && paymentIntent) {
      setOrderStatus(paymentStatus);
    }
  }, []);

  useEffect(() => {
    if (orderStatus === "success") {
      dispatch(clearCart());
    }
  }, [orderStatus]);

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