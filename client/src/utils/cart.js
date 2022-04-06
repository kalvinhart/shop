export const calculateCartCount = (cart) => {
  return cart.reduce((total, currentItem) => total + currentItem.qty, 0);
};

export const calculateCartTotal = (cart) => {
  const cartTotal = cart.reduce(
    (sum, currenItem) => sum + parseFloat(currenItem.total),
    0
  );
  return parseFloat(cartTotal.toFixed(2));
};

export const updateLocalStorage = (cart) => {
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
