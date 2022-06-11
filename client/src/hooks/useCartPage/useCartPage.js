import { useNavigate } from "react-router";
import { useAppSelector } from "../../application/hooks/useAppSelector";

export const useCartPage = () => {
  const { cart, cartTotal } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  return {
    cart,
    cartTotal,
    navigate,
  };
};
