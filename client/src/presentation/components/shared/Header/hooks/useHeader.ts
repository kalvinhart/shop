import { useNavigate } from "react-router";

import { useAuthState } from "../../../../hooks/useAuthState/useAuthState";
import { useCartState } from "../../../../hooks/useCartState/useCartState";

export const useHeader = () => {
  const navigate = useNavigate();
  const { loading, user, logOut } = useAuthState();
  const cart = useCartState()

  const handleLogOut = () => {
    logOut();
  };

  return {
    navigate,
    loading,
    user,
    cart,
    handleLogOut: () => handleLogOut(),
  };
};
