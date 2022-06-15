import { useEffect } from "react";
import { CartState } from "../../application/slices/cartSlice";

import { updateLocalStorage } from "../../utils/cart";
import { useAuthState } from "../shared/useAuthState/useAuthState";
import { useCartState } from "../shared/useCartState/useCartState";

export const useApp = () => {
  const { user, loadUserDetails } = useAuthState();
  const { cart, cartCount, cartTotal, loadCart } = useCartState();

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      const { id, token } = JSON.parse(localStorage.getItem("user") || "");
      loadUserDetails({ id, token });
    }
  }, [user, loadUserDetails]);

  useEffect(() => {
    if (cart !== null) return;
    
    if (localStorage.getItem("cart") && !cart) {
      loadCart();
    }
  }, [cart, loadCart]);

  useEffect(() => {
    const newCart: CartState = {
      cartCount,
      cartTotal,
      cart,
    };
    updateLocalStorage(newCart);
  }, [cart, cartCount, cartTotal]);
};
