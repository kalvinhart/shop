import NoCartItems from "../../shared/NoCartItems/NoCartItems";
import CartItem from "../CartItem/CartItem";

const CartDetails = ({ cart }) => {
  return (
    <>
      {cart && cart.length > 0 ? (
        cart.map((item) => <CartItem key={item.name} item={item} />)
      ) : (
        <NoCartItems />
      )}
    </>
  );
};

export default CartDetails;
