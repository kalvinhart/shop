import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadProductDetails } from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";

import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import ProductDetails from "./ProductDetails/ProductDetails";
import { H1 } from "../../styles/fontStyles";

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  const { id } = params;

  useEffect(() => {
    dispatch(loadProductDetails(id));
  }, []);

  useEffect(() => {
    if (error) navigate("/");
  }, [error]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <PageWrapper>
      <Container>
        {loading ? (
          <H1>Loading...</H1>
        ) : (
          <ProductDetails product={product} addToCart={handleAddToCart} />
        )}
      </Container>
    </PageWrapper>
  );
};

export default ProductPage;
