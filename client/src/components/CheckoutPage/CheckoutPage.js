import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import OrderSummary from "./OrderSummary/OrderSummary";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import Spinner from "../shared/Spinner/Spinner";
import { StyledCheckoutWrapper } from "./Checkout.styles";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const { cart, cartTotal } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [clientSecret, setClientSecret] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!cart) return;

    const items = {};

    cart.forEach((item) => (items[item.id] = { qty: item.qty }));

    const createPaymentIntent = async () => {
      const { data } = await axios.post("/api/payment/create-intent", { items, user });
      setClientSecret(data.clientSecret);
      setTotal(data.total);
    };
    createPaymentIntent();
  }, [cart]);

  const appearance = {
    variables: {
      borderRadius: "5px",
      fontFamily: "Poppins, sans-serif",
    },
    rules: {
      ".Input": {
        border: "1px solid #eee",
        borderRadius: "var(--borderRadius)",
      },
      ".Label": {
        fontWeight: "700",
        marginBottom: "10px",
        color: "#111",
        fontSize: "16px",
      },
      ".Error": {
        fontSize: "12px",
        color: "#dc143c",
      },
    },
  };

  if (!clientSecret) return <Spinner />;

  return (
    <PageWrapper>
      <Container>
        <StyledCheckoutWrapper>
          {clientSecret && (
            <>
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret,
                  appearance,
                  fonts: [
                    {
                      cssSrc:
                        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700",
                    },
                  ],
                  loader: "always",
                }}
              >
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
