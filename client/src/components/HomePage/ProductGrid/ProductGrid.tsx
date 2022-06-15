import Filters from "../Filters/Filters";
import { StyledGrid, StyledGridWrapper } from "./ProductGrid.styles";

type ProductGridProps = {
  children: React.ReactNode;
}

const ProductGrid = ({ children }: ProductGridProps) => {
  return (
    <StyledGridWrapper>
      <Filters />
      <StyledGrid>{children}</StyledGrid>
    </StyledGridWrapper>
  );
};

export default ProductGrid;
