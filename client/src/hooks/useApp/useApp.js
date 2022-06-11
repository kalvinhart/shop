import { useEffect } from "react";
import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../application/hooks/useAppSelector";

import { loadUserDetails } from "../../application/slices/thunks/authThunks";
import { loadCart } from "../../application/slices/thunks/cartThunks";

import { updateLocalStorage } from "../../utils/cart";

export const useApp = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const cartData = useAppSelector((state) => state.cart);

  const { cart } = cartData;

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

  useEffect(() => {
    const newCart = {
      ...cartData,
      cart,
    };
    updateLocalStorage(newCart);
  }, [cart]);
};
