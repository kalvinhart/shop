import { useSelector } from "react-redux";

import Cart from "./Cart/Cart";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return <Cart cart={cart} />;
};

export default CartPage;
