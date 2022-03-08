import CartDetails from "../CartDetails/CartDetails";
import OrderSummary from "../OrderSummary/OrderSummary";

const Cart = ({ cart }) => {
  return (
    <>
      <CartDetails cart={cart} />
      <OrderSummary />
    </>
  );
};

export default Cart;
