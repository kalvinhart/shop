import { useSelector } from "react-redux";

import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import Cart from "./Cart/Cart";

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <PageWrapper>
      <Container>
        <Cart cart={cart} />
      </Container>
    </PageWrapper>
  );
};

export default CartPage;
