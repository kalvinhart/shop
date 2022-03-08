import ProductGrid from "../ProductGrid/ProductGrid";
import ProductCard from "../ProductCard/ProductCard";
import SideBar from "../SideBar/SideBar";

import { StyledProductContentWrapper } from "./ProductContent.styles";

const ProductContent = ({ products }) => {
  return (
    <StyledProductContentWrapper>
      <SideBar />
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.name} productInfo={product} />
        ))}
      </ProductGrid>
    </StyledProductContentWrapper>
  );
};

export default ProductContent;
