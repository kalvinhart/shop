import { useNavigate } from "react-router";
import { useCartState } from "../../../hooks/useCartState/useCartState";

export const useCartPage = () => {
  const { cart, cartTotal } = useCartState();
  const navigate = useNavigate();

  return {
    cart,
    cartTotal,
    navigate,
  };
};
