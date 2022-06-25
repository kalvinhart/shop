import { useEffect } from "react";
import { CartState } from "../../../application/slices/cartSlice";
import { User } from "../../../domain/models/User";

import { updateLocalStorage } from "../../utils/cart";
import { getUserTokenFromStorage } from "../../utils/token";
import { useAuthState } from "../useAuthState/useAuthState";
import { useCartState } from "../useCartState/useCartState";

export const useApp = () => {
  const { user, loadUserDetails } = useAuthState();
  const { cart, cartCount, cartTotal, loadCart } = useCartState();

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      const { id, token }: User = getUserTokenFromStorage();
      loadUserDetails({ id, token } as { id: string; token: string });
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
