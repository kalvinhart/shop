import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../actions/productActions";

import PageWrapper from "../shared/PageWrapper/PageWrapper";
import Container from "../shared/Container/Container";
import ProductContent from "./ProductContent/ProductContent";
import { H1 } from "../../styles/fontStyles";
import { addToCart } from "../../actions/cartActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { loading, error, products } = getProducts;

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <PageWrapper>
      <Container>
        {loading ? (
          <H1>Loading...</H1>
        ) : (
          <ProductContent products={products} addToCart={handleAddToCart} />
        )}
      </Container>
    </PageWrapper>
  );
};

export default HomePage;
