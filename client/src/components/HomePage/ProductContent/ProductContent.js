import ProductGrid from "../ProductGrid/ProductGrid";
import ProductCard from "../ProductCard/ProductCard";
import SideBar from "../SideBar/SideBar";

import { StyledProductContentWrapper } from "./ProductContent.styles";
import { H3 } from "../../../styles/fontStyles";

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
      <ProductGrid>
        {productsLoading ? (
          <H3>Loading...</H3>
        ) : (
          products.map((product) => (
            <ProductCard key={product.name} productInfo={product} addToCart={addToCart} />
          ))
        )}
      </ProductGrid>
    </StyledProductContentWrapper>
  );
};

export default ProductContent;
