import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import Checkout from "./Checkout/Checkout";

const CheckoutPage = () => {
  return (
    <PageWrapper>
      <Container>
        <Checkout />
      </Container>
    </PageWrapper>
  );
};

export default CheckoutPage;
