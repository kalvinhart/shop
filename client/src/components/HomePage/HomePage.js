import { useState, useEffect } from "react";
import axios from "axios";

import PageWrapper from "../shared/PageWrapper/PageWrapper";
import Container from "../shared/Container/Container";
import ProductContent from "../shared/ProductContent/ProductContent";
import { H1 } from "../../styles/fontStyles";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("/api/products");
        console.log(data);
        setProductData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <PageWrapper>
      <Container>
        {loading ? <H1>Loading...</H1> : <ProductContent products={productData} />}
      </Container>
    </PageWrapper>
  );
};

export default HomePage;
