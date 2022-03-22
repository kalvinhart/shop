import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../actions/productActions";

import PageWrapper from "../shared/PageWrapper/PageWrapper";
import Container from "../shared/Container/Container";
import ProductContent from "./ProductContent/ProductContent";
import { H1 } from "../../styles/fontStyles";
import { addToCart } from "../../actions/cartActions";

const HomePage = () => {
  let firstLoad = useRef(true);
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.products);
  const { loading, error, products, searchOptions } = getProducts;

  const { options, sortBy } = searchOptions;

  useEffect(() => {
    if (firstLoad.current) return;

    dispatch(loadProducts({ options, sortBy }));
  }, [options, sortBy]);

  useEffect(() => {
    dispatch(loadProducts());
    firstLoad.current = false;
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
