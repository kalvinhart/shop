import { Product } from "../../../../domain/models/Product";
import { H2, H3, SpanPrice, SpanRegular, SpanStock } from "../../../common/styles";
import { AddToCart } from "../AddToCart";
import {
  ProductHeading,
  ProductInfoGroup,
  ProductMainInfoWrapper,
  ProductTypeInfo,
} from "./ProductMainInfo.styles";

type ProductMainInfoProps = {
  product: Product;
};

const ProductMainInfo = ({ product }: ProductMainInfoProps) => {
  const { name, price, brand, size, color, stockQty } = product;

  return (
    <ProductMainInfoWrapper>
      <ProductHeading>
        <ProductInfoGroup>
          <H2>{name}</H2>
          <SpanPrice>£{`${price.toFixed(2)}`}</SpanPrice>
          <SpanStock inStock={stockQty > 0}>
            {" "}
            {stockQty > 0 ? "In Stock" : "Out of Stock"}
          </SpanStock>
        </ProductInfoGroup>
      </ProductHeading>

      <ProductTypeInfo>
        {brand && (
          <ProductInfoGroup>
            <H3>Brand:</H3>
            <SpanRegular>{brand}</SpanRegular>
          </ProductInfoGroup>
        )}

        {size && (
          <ProductInfoGroup>
            <H3>Size:</H3>
            <SpanRegular>{size}</SpanRegular>
          </ProductInfoGroup>
        )}

        {color && (
          <ProductInfoGroup>
            <H3>Colour:</H3>
            <SpanRegular>{color}</SpanRegular>
          </ProductInfoGroup>
        )}
      </ProductTypeInfo>
      <AddToCart product={product} />
    </ProductMainInfoWrapper>
  );
};

export default ProductMainInfo;
