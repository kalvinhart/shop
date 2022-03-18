export const calculateCartCount = (cart) => {
  return cart.reduce((total, currentItem) => total + currentItem.qty, 0);
};

export const calculateCartTotal = (cart) => {
  return cart.reduce((sum, currenItem) => sum + parseFloat(currenItem.total), 0);
};

export const updateLocalStorage = (cart) => {
  const cartStorage = {
    ...cart,
    updatedAt: Date.now(),
  };

  localStorage.setItem("cart", JSON.stringify(cartStorage));
};
