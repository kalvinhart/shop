import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const useCartPage = () => {
  const { cart, cartTotal } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return {
    cart,
    cartTotal,
    navigate,
  };
};
