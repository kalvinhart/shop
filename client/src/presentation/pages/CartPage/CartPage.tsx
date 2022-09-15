import { useCartState } from "../../common/hooks/useCartState";
import { usePageTitle } from "../../common/hooks/usePageTitle";

import { CartWrapper } from "./CartPage.styles";
import { CartContent } from "../../features/cart/components/CartContent";
import { CartSummary } from "../../features/cart/components/CartSummary";

const CartPage = () => {
  const { cart, cartTotal } = useCartState();

  usePageTitle("Shopping Cart");

  return (
    <CartWrapper>
      <CartContent cart={cart} cartTotal={cartTotal} />
      <CartSummary cartTotal={cartTotal} />
    </CartWrapper>
  );
};

export default CartPage;
