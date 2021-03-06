import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { usePageTitle } from "../../common/hooks/usePageTitle";
import { useCheckoutPage } from "./hooks/useCheckoutPage";

import OrderSummary from "../../features/checkout/OrderSummary/OrderSummary";
import CheckoutForm from "../../features/checkout/CheckoutForm/CheckoutForm";
import { Spinner } from "../../common/components/Spinner";

import { StyledCheckoutWrapper } from "./Checkout.styles";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage = () => {
  const { cart, cartTotal, total, clientSecret, appearance } = useCheckoutPage();

  usePageTitle("Checkout");

  return (
    <StyledCheckoutWrapper>
      {!clientSecret ? (
        <Spinner />
      ) : (
        <>
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance,
              fonts: [
                {
                  cssSrc: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700",
                },
              ],
            }}
          >
            <CheckoutForm total={total} />
          </Elements>
          <OrderSummary cart={cart || []} cartTotal={cartTotal} />
        </>
      )}
    </StyledCheckoutWrapper>
  );
};

export default CheckoutPage;
