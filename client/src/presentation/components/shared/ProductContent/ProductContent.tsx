import ProductGrid from "../ProductGrid/ProductGrid";
import ProductCard from "../ProductCard/ProductCard";
import SideBar from "../SideBar/SideBar";
import Spinner from "../Spinner/Spinner";

import { StyledProductContentWrapper } from "./ProductContent.styles";
import NoResults from "../NoResults/NoResults";
import { Product } from "../../../../domain/models/Product";
import { useState } from "react";

type ProductContentProps = {
  products: Product[];
  productsLoading: boolean;
};

const ProductContent = ({ products, productsLoading }: ProductContentProps) => {
  const [show, setShow] = useState(false);

  return (
    <StyledProductContentWrapper>
      <SideBar show={show} setShow={setShow} />
      {productsLoading ? (
        <Spinner testId="products-spinner" />
      ) : products.length > 0 ? (
        <ProductGrid setShow={setShow}>
          {products.map((product) => (
            <ProductCard key={product.name} productInfo={product} />
          ))}
        </ProductGrid>
      ) : (
        <NoResults />
      )}
    </StyledProductContentWrapper>
  );
};

export default ProductContent;
