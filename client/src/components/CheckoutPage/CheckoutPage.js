import { useSelector } from "react-redux";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import OrderSummary from "./OrderSummary/OrderSummary";
import { StyledCheckoutWrapper } from "./Checkout.styles";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { useEffect, useState } from "react";
import Spinner from "../shared/Spinner/Spinner";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const { cart, cartTotal } = useSelector((state) => state.cart);
  const [clientSecret, setClientSecret] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!cart) return;

    const items = {};

    cart.forEach((item) => (items[item.id] = { qty: item.qty }));

    const createPaymentIntent = async () => {
      const { data } = await axios.post("/api/payment/create-intent", { items });
      setClientSecret(data.clientSecret);
      setTotal(data.total);
    };
    createPaymentIntent();
  }, [cart]);

  const appearance = {
    theme: "flat",
  };

  if (!clientSecret) return <Spinner />;

  return (
    <PageWrapper>
      <Container>
        <StyledCheckoutWrapper>
          {clientSecret && (
            <>
              <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                <CheckoutForm total={total} />
              </Elements>
              <OrderSummary cart={cart} cartTotal={cartTotal} />
            </>
          )}
        </StyledCheckoutWrapper>
      </Container>
    </PageWrapper>
  );
};

export default CheckoutPage;
