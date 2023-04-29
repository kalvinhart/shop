import { useNavigate } from "react-router";

import { useAuthState } from "../../../../common/hooks/useAuthState";
import { useCartState } from "../../../../common/hooks/useCartState";

export const useHeader = () => {
  const navigate = useNavigate();
  const { loading, user, logOut } = useAuthState();
  const cart = useCartState();

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
