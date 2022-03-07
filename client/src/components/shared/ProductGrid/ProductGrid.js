import ProductCard from "../../shared/ProductCard/ProductCard";

import { StyledGrid } from "./ProductGrid.styles";

const ProductGrid = () => {
  return (
    <StyledGrid>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </StyledGrid>
  );
};

export default ProductGrid;
