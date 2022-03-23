import ProductGrid from "../ProductGrid/ProductGrid";
import ProductCard from "../ProductCard/ProductCard";
import SideBar from "../SideBar/SideBar";
import Spinner from "../../shared/Spinner/Spinner";

import { StyledProductContentWrapper } from "./ProductContent.styles";
import NoResults from "../NoResults/NoResults";

const ProductContent = ({
  products,
  productsLoading,
  addToCart,
  categories,
  categoriesLoading,
}) => {
  return (
    <StyledProductContentWrapper>
      <SideBar categories={categories} loading={categoriesLoading} />
      {productsLoading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.name} productInfo={product} addToCart={addToCart} />
          ))}
        </ProductGrid>
      ) : (
        <NoResults />
      )}
    </StyledProductContentWrapper>
  );
};

export default ProductContent;
