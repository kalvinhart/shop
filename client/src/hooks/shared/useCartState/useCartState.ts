import { useCallback } from "react";
import { useAppDispatch } from "../../../application/hooks/useAppDispatch"
import { useAppSelector } from "../../../application/hooks/useAppSelector"
import { clearCart } from "../../../application/slices/cartSlice";
import { addToCart, loadCart, removeFromCart, updateCart, UpdateCartItem } from "../../../application/slices/thunks/cartThunks"
import { CartItem } from "../../../domain/models/CartItem";

export const useCartState = () => {
    const dispatch = useAppDispatch();
    const {cart, cartCount, cartTotal} = useAppSelector(state => state.cart)

    return {
        cart,
        cartCount,
        cartTotal,
        loadCart: useCallback(() => {dispatch(loadCart())}, [dispatch]),
        addToCart: useCallback((item: CartItem) => {dispatch(addToCart(item))}, [dispatch]),
        updateCart: useCallback((item: UpdateCartItem) => {dispatch(updateCart(item))}, [dispatch]),
        removeFromCart: useCallback((id: string) => {dispatch(removeFromCart(id))}, [dispatch]),
        clearCart: useCallback(() => {dispatch(clearCart(null))}, [dispatch])
    }
}