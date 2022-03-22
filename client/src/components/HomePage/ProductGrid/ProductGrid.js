import Filters from "../Filters/Filters";
import { StyledGrid, StyledGridWrapper } from "./ProductGrid.styles";

const ProductGrid = ({ children }) => {
  return (
    <StyledGridWrapper>
      <Filters />
      <StyledGrid>{children}</StyledGrid>
    </StyledGridWrapper>
  );
};

export default ProductGrid;
