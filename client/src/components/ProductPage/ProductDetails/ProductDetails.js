import AddToCart from "../AddToCart/AddToCart";

import { H2, H3, SpanPrice, SpanRegular, SpanStock } from "../../../styles/fontStyles";
import {
  StyledProductBackground,
  StyledProductImage,
  StyledProductImageWrapper,
  StyledProductInfoGroup,
  StyledProductMainInfo,
  StyledProductMainInfoText,
  StyledProductMainInfoWrapper,
  StyledProductMoreInfo,
  StyledProductTitle,
} from "./ProductDetails.styles";

import HorizonImage from "../../../Horizon-II-Forbidden-West-Cover-Art.png";

const ProductDetails = () => {
  return (
    <StyledProductBackground>
      <StyledProductMainInfoWrapper>
        <StyledProductImageWrapper>
          <StyledProductImage src={HorizonImage} alt="" />
        </StyledProductImageWrapper>

        <StyledProductMainInfo>
          <StyledProductTitle>
            <StyledProductInfoGroup>
              <H2>Product Name</H2>
              <SpanPrice>£49.99</SpanPrice>
              <SpanStock inStock={true}>In Stock</SpanStock>
            </StyledProductInfoGroup>
          </StyledProductTitle>

          <StyledProductMainInfoText>
            <StyledProductInfoGroup>
              <H3>Brand:</H3>
              <SpanRegular>Brand Name</SpanRegular>
            </StyledProductInfoGroup>

            <StyledProductInfoGroup>
              <H3>Size:</H3>
              <SpanRegular>Medium</SpanRegular>
            </StyledProductInfoGroup>

            <StyledProductInfoGroup>
              <H3>Colour:</H3>
              <SpanRegular>Red</SpanRegular>
            </StyledProductInfoGroup>
          </StyledProductMainInfoText>
          <AddToCart />
        </StyledProductMainInfo>
      </StyledProductMainInfoWrapper>

      <StyledProductMoreInfo>
        <StyledProductInfoGroup>
          <H3>Description:</H3>
          <SpanRegular>Description of the goods will go here</SpanRegular>
        </StyledProductInfoGroup>
      </StyledProductMoreInfo>
    </StyledProductBackground>
  );
};

export default ProductDetails;
