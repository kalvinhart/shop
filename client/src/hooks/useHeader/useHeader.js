import { useNavigate } from "react-router";
import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../application/hooks/useAppSelector";
import { logOut } from "../../application/slices/thunks/authThunks";

export const useHeader = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, user } = useAppSelector((state) => state.auth);
  const cart = useAppSelector((state) => state.cart);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return {
    navigate,
    loading,
    user,
    cart,
    handleLogOut: () => handleLogOut(),
  };
};
