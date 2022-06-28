import { useEffect } from "react";

import { useAuthState } from "../useAuthState/useAuthState";
import { useCartState } from "../useCartState/useCartState";

import { User } from "../../../../domain/models/User";
import { CartState } from "../../../features/cart/slice/cartSlice";

import { updateLocalStorage } from "../../../features/cart/utils/cart";
import { getUserTokenFromStorage } from "../../utils/token";

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
