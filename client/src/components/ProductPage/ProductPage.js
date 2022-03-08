import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import ProductDetails from "./ProductDetails/ProductDetails";
import { H1 } from "../../styles/fontStyles";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const getProduct = async (id) => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct(id);
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
