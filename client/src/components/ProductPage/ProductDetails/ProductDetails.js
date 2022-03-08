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

const ProductDetails = ({ product }) => {
  const { _id, name, price, brand, size, color, description, imageUrl, stockQty } =
    product;

  return (
    <StyledProductBackground>
      <StyledProductMainInfoWrapper>
        <StyledProductImageWrapper>
          <StyledProductImage src={imageUrl} alt={name} />
        </StyledProductImageWrapper>

        <StyledProductMainInfo>
          <StyledProductTitle>
            <StyledProductInfoGroup>
              <H2>{name}</H2>
              <SpanPrice>£{`${price}`}</SpanPrice>
              <SpanStock inStock={stockQty > 0}>
                {" "}
                {stockQty > 0 ? "In Stock" : "Out of Stock"}
              </SpanStock>
            </StyledProductInfoGroup>
          </StyledProductTitle>

          <StyledProductMainInfoText>
            {brand && (
              <StyledProductInfoGroup>
                <H3>Brand:</H3>
                <SpanRegular>{brand}</SpanRegular>
              </StyledProductInfoGroup>
            )}

            {size && (
              <StyledProductInfoGroup>
                <H3>Size:</H3>
                <SpanRegular>{size}</SpanRegular>
              </StyledProductInfoGroup>
            )}

            {color && (
              <StyledProductInfoGroup>
                <H3>Colour:</H3>
                <SpanRegular>{color}</SpanRegular>
              </StyledProductInfoGroup>
            )}
          </StyledProductMainInfoText>
          <AddToCart productPrice={price} />
        </StyledProductMainInfo>
      </StyledProductMainInfoWrapper>

      <StyledProductMoreInfo>
        <StyledProductInfoGroup>
          <H3>Description:</H3>
          <SpanRegular>{description}</SpanRegular>
        </StyledProductInfoGroup>
      </StyledProductMoreInfo>
    </StyledProductBackground>
  );
};

export default ProductDetails;
