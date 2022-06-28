import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { useCartState } from "../../../common/hooks/useCartState";

export const usePaymentConfirmationPage = () => {
  const { clearCart } = useCartState();
  const navigate = useNavigate();
  const location = useLocation();
  const [orderStatus, setOrderStatus] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paymentStatus = params.get("paymentStatus");
    const paymentIntent = params.get("payment_intent");
    if (paymentStatus && paymentIntent) {
      setOrderStatus(paymentStatus);
    }
  }, [location.search]);

  useEffect(() => {
    if (orderStatus === "success") {
      localStorage.removeItem("cart");
      clearCart();
    }
  }, [orderStatus, clearCart]);

  return {
    orderStatus,
    navigate,
  };
};
