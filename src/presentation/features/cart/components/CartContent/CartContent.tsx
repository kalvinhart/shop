import { CartItem as CartItemType } from "../../../../../domain/models/CartItem";

import { CartContentWrapper } from "./CartContent.styles";
import { CartItem } from "../CartItem";
import NoCartItems from "../NoCartItems/NoCartItems";
import { H2 } from "../../../../common/styles";

type CartContentProps = {
  cart: CartItemType[] | null;
  cartTotal: number;
};

const CartContent = ({ cart, cartTotal }: CartContentProps) => {
  return (
    <CartContentWrapper>
      <H2>Your Cart</H2>
      {cart && cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <CartItem key={item.name} item={item} />
          ))}
        </>
      ) : (
        <NoCartItems />
      )}
    </CartContentWrapper>
  );
};

export default CartContent;
