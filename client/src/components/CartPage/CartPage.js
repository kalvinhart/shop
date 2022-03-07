import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import Cart from "./Cart/Cart";

const CartPage = () => {
  return (
    <PageWrapper>
      <Container>
        <Cart />
      </Container>
    </PageWrapper>
  );
};

export default CartPage;
