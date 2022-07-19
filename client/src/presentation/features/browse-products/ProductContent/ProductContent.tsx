import { useState } from "react";

import { Product } from "../../../../domain/models/Product";

import ProductGrid from "../ProductGrid/ProductGrid";
import ProductCard from "../ProductCard/ProductCard";
import NoResults from "../NoResults/NoResults";
import { SideBar } from "../../filters";
import { Spinner } from "../../../common/components/Spinner";

import { ProductContentWrapper, ProductResultsWrapper } from "./ProductContent.styles";

type ProductContentProps = {
  products: Product[];
  productsLoading: boolean;
};

const ProductContent = ({ products, productsLoading }: ProductContentProps) => {
  const [show, setShow] = useState(false);

  return (
    <ProductContentWrapper>
      <SideBar show={show} setShow={setShow} />
      {productsLoading ? (
        <Spinner testId="products-spinner" />
      ) : products.length > 0 ? (
        <ProductResultsWrapper>
          <ProductGrid setShow={setShow}>
            {products.map((product) => (
              <ProductCard key={product.name} productInfo={product} />
            ))}
          </ProductGrid>
        </ProductResultsWrapper>
      ) : (
        <NoResults />
      )}
    </ProductContentWrapper>
  );
};

export default ProductContent;
