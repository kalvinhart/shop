import ProductGrid from "../../shared/ProductGrid/ProductGrid";
import SideBar from "../SideBar/SideBar";

import { StyledProductContentWrapper } from "./ProductContent.styles";

const ProductContent = () => {
  return (
    <StyledProductContentWrapper>
      <SideBar />
      <ProductGrid />
    </StyledProductContentWrapper>
  );
};

export default ProductContent;
