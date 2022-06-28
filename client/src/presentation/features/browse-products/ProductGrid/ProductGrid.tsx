import ResultsHeader from "../ResultsHeader/ResultsHeader";
import { StyledGrid, StyledGridWrapper } from "./ProductGrid.styles";

type ProductGridProps = {
  children: React.ReactNode;
  setShow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const ProductGrid = ({ setShow, children }: ProductGridProps) => {
  return (
    <StyledGridWrapper>
      <ResultsHeader setShow={setShow} />
      <StyledGrid>{children}</StyledGrid>
    </StyledGridWrapper>
  );
};

export default ProductGrid;
