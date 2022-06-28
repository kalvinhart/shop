import { useNavigate } from "react-router";

import { useCartState } from "../../../common/hooks/useCartState";

export const useCartPage = () => {
  const { cart, cartTotal } = useCartState();
  const navigate = useNavigate();

  return {
    cart,
    cartTotal,
    navigate,
  };
};
