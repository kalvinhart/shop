import { CartItem as CartItemType } from "../../../../../domain/models/CartItem";
import { CartItem } from "../CartItem";
import { CartSummary } from "../CartSummary";
import NoCartItems from "../NoCartItems/NoCartItems";
import { CartContentWrapper } from "./CartContent.styles";

type CartContentProps = {
  cart: CartItemType[] | null;
  cartTotal: number;
};

const CartContent = ({ cart, cartTotal }: CartContentProps) => {
  return (
    <CartContentWrapper>
      {cart && cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <CartItem key={item.name} item={item} />
          ))}
          <CartSummary cartTotal={cartTotal} />
        </>
      ) : (
        <NoCartItems />
      )}
    </CartContentWrapper>
  );
};

export default CartContent;
