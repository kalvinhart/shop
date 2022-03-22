import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../actions/productActions";

import PageWrapper from "../shared/PageWrapper/PageWrapper";
import Container from "../shared/Container/Container";
import ProductContent from "./ProductContent/ProductContent";
import { H1 } from "../../styles/fontStyles";
import { addToCart } from "../../actions/cartActions";
import { loadCategories } from "../../actions/categoryActions";

const HomePage = () => {
  let firstLoad = useRef(true);
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.products);
  const {
    loading: productsLoading,
    error: productsError,
    products,
    searchOptions,
  } = getProducts;

  const getCategories = useSelector((state) => state.categories);
  const {
    loading: categoriesLoading,
    error: categoriesError,
    categories,
  } = getCategories;

  const { options, sortBy } = searchOptions;

  useEffect(() => {
    if (firstLoad.current) return;

    dispatch(loadProducts({ options, sortBy }));
  }, [options, sortBy]);

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
    firstLoad.current = false;
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <PageWrapper>
      <Container>
        <ProductContent
          products={products}
          productsLoading={productsLoading}
          addToCart={handleAddToCart}
          categories={categories}
          categoriesLoading={categoriesLoading}
        />
      </Container>
    </PageWrapper>
  );
};

export default HomePage;
