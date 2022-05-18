import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logOut } from "../../actions/authActions";

export const useHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

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
