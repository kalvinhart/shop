import { useNavigate } from "react-router";
import { useAppSelector } from "../../../../application/hooks/useAppSelector";
import { useAuthState } from "../../../../hooks/shared/useAuthState/useAuthState";
import { useCartState } from "../../../../hooks/shared/useCartState/useCartState";

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
