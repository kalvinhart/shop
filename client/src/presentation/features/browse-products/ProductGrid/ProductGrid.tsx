import { Pagination } from "../Pagination";
import ResultsHeader from "../ResultsHeader/ResultsHeader";
import ResultsHeaderSkeleton from "../ResultsHeader/ResultsHeaderSkeleton";
import { Grid, GridWrapper } from "./ProductGrid.styles";

type ProductGridProps = {
  children: React.ReactNode;
  setShow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  loading: boolean;
};

const ProductGrid = ({ setShow, children, loading }: ProductGridProps) => {
  return (
    <GridWrapper>
      {loading ? <ResultsHeaderSkeleton /> : <ResultsHeader setShow={setShow} />}
      <Pagination />
      <Grid>{children}</Grid>
      <Pagination />
    </GridWrapper>
  );
};

export default ProductGrid;
