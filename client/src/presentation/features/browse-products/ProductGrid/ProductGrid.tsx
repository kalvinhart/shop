import ResultsHeader from "../ResultsHeader/ResultsHeader";
import { Grid, GridWrapper } from "./ProductGrid.styles";

type ProductGridProps = {
  children: React.ReactNode;
  setShow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const ProductGrid = ({ setShow, children }: ProductGridProps) => {
  return (
    <GridWrapper>
      <ResultsHeader setShow={setShow} />
      <Grid>{children}</Grid>
    </GridWrapper>
  );
};

export default ProductGrid;
