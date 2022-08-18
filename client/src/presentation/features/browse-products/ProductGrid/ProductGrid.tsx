import { Product } from "../../../../domain/models/Product";
import { Pagination } from "../Pagination";
import ResultsHeader from "../ResultsHeader/ResultsHeader";
import ResultsHeaderSkeleton from "../ResultsHeader/ResultsHeaderSkeleton";
import { Grid, GridWrapper } from "./ProductGrid.styles";

type ProductGridProps = {
  children: React.ReactNode;
  setShow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  loading: boolean;
  products: Product[];
};

const ProductGrid = ({ setShow, children, loading, products }: ProductGridProps) => {
  return (
    <GridWrapper>
      {loading ? <ResultsHeaderSkeleton /> : <ResultsHeader setShow={setShow} />}
      <Pagination />
      <Grid singleColumn={products.length === 0}>{children}</Grid>
      <Pagination />
    </GridWrapper>
  );
};

export default ProductGrid;
