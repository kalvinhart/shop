import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import ProductDetails from "./ProductDetails/ProductDetails";

const ProductPage = () => {
  return (
    <PageWrapper>
      <Container>
        <ProductDetails />
      </Container>
    </PageWrapper>
  );
};

export default ProductPage;
