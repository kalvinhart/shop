import { useState } from "react";

import { Product } from "../../../../domain/models/Product";

import ProductGrid from "../ProductGrid/ProductGrid";
import ProductCard from "../ProductCard/ProductCard";
import NoResults from "../NoResults/NoResults";
import { SideBar } from "../../filters";

import { ProductContentWrapper, ProductResultsWrapper } from "./ProductContent.styles";
import ProductContentSkeleton from "./ProductContentSkeleton";
import SideBarSkeleton from "../../filters/SideBar/SideBarSkeleton";

type ProductContentProps = {
  products: Product[];
  productsLoading: boolean;
};

const ProductContent = ({ products, productsLoading }: ProductContentProps) => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <ProductContentWrapper>
      {productsLoading ? (
        <SideBarSkeleton />
      ) : (
        <SideBar show={showSideBar} setShow={setShowSideBar} />
      )}

      <ProductResultsWrapper>
        <ProductGrid setShow={setShowSideBar} loading={productsLoading}>
          {productsLoading ? (
            <ProductContentSkeleton numCards={12} />
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.name} productInfo={product} />
            ))
          ) : (
            <NoResults />
          )}
        </ProductGrid>
      </ProductResultsWrapper>
    </ProductContentWrapper>
  );
};

export default ProductContent;
