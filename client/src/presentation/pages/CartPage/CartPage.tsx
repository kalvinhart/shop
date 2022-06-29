import { useCartState } from "../../common/hooks/useCartState";
import { usePageTitle } from "../../common/hooks/usePageTitle";

import { StyledCartWrapper } from "./CartPage.styles";
import { CartHeader } from "../../features/cart/components/CartHeader";
import { CartContent } from "../../features/cart/components/CartContent";

const CartPage = () => {
  const { cart, cartTotal } = useCartState();

  usePageTitle("Shopping Cart");

  return (
    <StyledCartWrapper>
      <CartHeader cart={cart} />
      <CartContent cart={cart} cartTotal={cartTotal} />
    </StyledCartWrapper>
  );
};

export default CartPage;
