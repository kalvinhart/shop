import ResultsHeader from "../ResultsHeader/ResultsHeader";
import { StyledGrid, StyledGridWrapper } from "./ProductGrid.styles";

type ProductGridProps = {
  children: React.ReactNode;
};

const ProductGrid = ({ children }: ProductGridProps) => {
  return (
    <StyledGridWrapper>
      <ResultsHeader />
      <StyledGrid>{children}</StyledGrid>
    </StyledGridWrapper>
  );
};

export default ProductGrid;
