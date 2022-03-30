import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import PageWrapper from "../shared/PageWrapper/PageWrapper";
import Container from "../shared/Container/Container";
import ProductContent from "./ProductContent/ProductContent";

import { addToCart } from "../../actions/cartActions";
import { loadProducts, updateSearchOptions } from "../../actions/productActions";
import { convertURLParams } from "../../utils/convertURLParams";

const HomePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.products);
  const {
    loading: productsLoading,
    error: productsError,
    products,
    searchOptions,
  } = getProducts;

  useEffect(() => {
    if (searchOptions) {
      const requestOptions = {
        options: { ...searchOptions },
        sortBy: searchOptions.sortBy ?? "",
      };

      if (requestOptions.options.sortBy) {
        delete requestOptions.options.sortBy;
      }

      dispatch(loadProducts(requestOptions));
    } else {
      dispatch(loadProducts());
    }
  }, [searchOptions]);

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
        />
      </Container>
    </PageWrapper>
  );
};

export default HomePage;
