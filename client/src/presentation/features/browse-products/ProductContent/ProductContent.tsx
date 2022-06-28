import { useState } from "react";

import { Product } from "../../../../domain/models/Product";

import ProductGrid from "../ProductGrid/ProductGrid";
import ProductCard from "../ProductCard/ProductCard";
import NoResults from "../NoResults/NoResults";
import { SideBar } from "../../filters";
import { Spinner } from "../../../common/components/Spinner";

import { StyledProductContentWrapper } from "./ProductContent.styles";

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
