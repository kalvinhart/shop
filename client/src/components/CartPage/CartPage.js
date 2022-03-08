import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "../../actions/cartActions";

import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import Cart from "./Cart/Cart";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.getCart);
  const { loading, error, cart } = cartData;

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  return (
    <PageWrapper>
      <Container>
        <Cart cart={cart} />
      </Container>
    </PageWrapper>
  );
};

export default CartPage;
