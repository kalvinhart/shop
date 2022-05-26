import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { clearCart } from "../../slices/cartSlice";

export const usePaymentConfirmationPage = () => {
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

  return {
    orderStatus,
    navigate,
  };
};
