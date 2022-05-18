import ProductGrid from "../ProductGrid/ProductGrid";
import ProductCard from "../ProductCard/ProductCard";
import SideBar from "../SideBar/SideBar";
import Spinner from "../../shared/Spinner/Spinner";

import { StyledProductContentWrapper } from "./ProductContent.styles";
import NoResults from "../NoResults/NoResults";

const ProductContent = ({ products, productsLoading }) => {
  return (
    <StyledProductContentWrapper>
      <SideBar />
      {productsLoading ? (
        <Spinner />
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
