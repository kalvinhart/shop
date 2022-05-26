import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadUserDetails } from "../../slices/thunks/authThunks";
import { loadCart } from "../../slices/thunks/cartThunks";

import { updateLocalStorage } from "../../utils/cart";

export const useApp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const cartData = useSelector((state) => state.cart);

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
