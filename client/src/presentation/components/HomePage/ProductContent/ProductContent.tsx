import ProductGrid from "../ProductGrid/ProductGrid";
import ProductCard from "../ProductCard/ProductCard";
import SideBar from "../SideBar/SideBar";
import Spinner from "../../shared/Spinner/Spinner";

import { StyledProductContentWrapper } from "./ProductContent.styles";
import NoResults from "../NoResults/NoResults";
import { Product } from "../../../../domain/models/Product";

type ProductContentProps = {
  products: Product[];
  productsLoading: boolean;
};

const ProductContent = ({ products, productsLoading }: ProductContentProps) => {
  return (
    <StyledProductContentWrapper>
      <SideBar />
      {productsLoading ? (
        <Spinner testId="products-spinner" />
      ) : products.length > 0 ? (
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.name} productInfo={product} />
          ))}
        </ProductGrid>
      ) : (
        <NoResults />
      )}
    </StyledProductContentWrapper>
  );
};

export default ProductContent;
