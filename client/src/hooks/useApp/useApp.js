import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadUserDetails } from "../../slices/thunks/authThunks";
import { loadCart } from "../../slices/thunks/cartThunks";

export const useApp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      const { id, token } = JSON.parse(localStorage.getItem("user"));
      dispatch(loadUserDetails({ id, token }));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("cart") && !cart) {
      dispatch(loadCart());
    }
  }, []);
};
