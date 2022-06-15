import { useNavigate } from "react-router";
import { useCartState } from "../../../hooks/shared/useCartState/useCartState";

export const useCartPage = () => {
  const { cart, cartTotal } = useCartState();
  const navigate = useNavigate();

  return {
    cart,
    cartTotal,
    navigate,
  };
};
