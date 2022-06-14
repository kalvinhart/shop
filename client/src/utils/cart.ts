import { CartItem } from "../domain/models/CartItem";

export const calculateCartCount = (cart: CartItem[]) => {
  return cart.reduce((total, currentItem) => total + currentItem.qty, 0);
};

export const calculateCartTotal = (cart: CartItem[]) => {
  const cartTotal = cart.reduce(
    // (sum, currenItem) => sum + parseFloat(currenItem.total), -- this was the previous code which worked before converting to TS, just in case something goes wrong later.
    (sum, currenItem) => sum + currenItem.total,
    0
  );
  return parseFloat(cartTotal.toFixed(2));
};

export const updateLocalStorage = (cart: CartItem[]) => {
  if (!cart) {
    localStorage.removeItem("cart");
  } else {
    const cartStorage = {
      ...cart,
      updatedAt: Date.now(),
    };

    localStorage.setItem("cart", JSON.stringify(cartStorage));
  }
};
