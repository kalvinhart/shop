import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { usePageTitle } from "../../common/hooks/usePageTitle";
import { useCheckoutPage } from "./hooks/useCheckoutPage";

import { Spinner } from "../../common/components/Spinner";

import { CheckoutWrapper } from "./CheckoutPage.styles";
import { Checkout } from "../../features/checkout/Checkout";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage = () => {
  const { cart, cartTotal, total, clientSecret, appearance } = useCheckoutPage();

  usePageTitle("Checkout");

  return (
    <CheckoutWrapper>
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
            <Checkout cart={cart || []} cartTotal={cartTotal} total={total} />
          </Elements>
        </>
      )}
    </CheckoutWrapper>
  );
};

export default CheckoutPage;
