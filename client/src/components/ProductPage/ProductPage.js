import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import ProductDetails from "./ProductDetails/ProductDetails";
import { H1 } from "../../styles/fontStyles";
import { loadProductDetails } from "../../actions/productActions";

const ProductPage = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(loadProductDetails(id));
  }, []);

  return (
    <PageWrapper>
      <Container>
        {loading ? <H1>Loading...</H1> : <ProductDetails product={product} />}
      </Container>
    </PageWrapper>
  );
};

export default ProductPage;
