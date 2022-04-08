import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductContent from "./ProductContent/ProductContent";

import { addToCart } from "../../actions/cartActions";
import { loadProducts } from "../../actions/productActions";

const HomePage = () => {
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
    <ProductContent
      products={products}
      productsLoading={productsLoading}
      addToCart={handleAddToCart}
    />
  );
};

export default HomePage;
