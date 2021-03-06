import { useEffect, useState } from "react";
import axios from "axios";

import { useAuthState } from "../../../common/hooks/useAuthState";
import { useCartState } from "../../../common/hooks/useCartState";

import { CartItem } from "../../../../domain/models/CartItem";

type Items = {
  [key: string]: {
    qty: number;
    total: number;
  };
};

export const useCheckoutPage = () => {
  const { cart, cartTotal } = useCartState();
  const { user } = useAuthState();

  const [clientSecret, setClientSecret] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!cart) return;
    if (!user) return;

    const items: Items = {};

    cart.forEach(
      (item: CartItem) => (items[item.id] = { qty: item.qty, total: item.total })
    );

    const createPaymentIntent = async () => {
      const { data } = await axios.post("/api/payment/create-intent", { items, user });
      setClientSecret(data.clientSecret);
      setTotal(data.total);
    };
    createPaymentIntent();
  }, [cart, user]);

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

  return {
    cart,
    cartTotal,
    total,
    clientSecret,
    appearance,
  };
};
