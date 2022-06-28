import AddToCart from "../../../features/display-product/AddToCart/AddToCart";

import { Product } from "../../../../domain/models/Product";

import {
  H2,
  H3,
  SpanDescription,
  SpanPrice,
  SpanRegular,
  SpanStock,
} from "../../../common/styles";
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

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { name, price, brand, size, color, description, imageUrl, stockQty } = product;

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
          <AddToCart product={product} />
        </StyledProductMainInfo>
      </StyledProductMainInfoWrapper>

      <StyledProductMoreInfo>
        <StyledProductInfoGroup>
          <H3>Description:</H3>
          <SpanDescription>{description}</SpanDescription>
        </StyledProductInfoGroup>
      </StyledProductMoreInfo>
    </StyledProductBackground>
  );
};

export default ProductDetails;
