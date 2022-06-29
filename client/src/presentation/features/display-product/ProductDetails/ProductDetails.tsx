import { Product } from "../../../../domain/models/Product";

import { H3, SpanDescription } from "../../../common/styles";
import {
  ProductBackground,
  ProductImage,
  ProductImageWrapper,
  ProductInfoGroup,
  ProductMainInfoWrapper,
  ProductDescriptionInfo,
} from "./ProductDetails.styles";
import ProductMainInfo from "../ProductMainInfo/ProductMainInfo";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { name, description, imageUrl } = product;

  return (
    <ProductBackground>
      <ProductMainInfoWrapper>
        <ProductImageWrapper>
          <ProductImage src={imageUrl} alt={name} />
        </ProductImageWrapper>

        <ProductMainInfo product={product} />
      </ProductMainInfoWrapper>

      <ProductDescriptionInfo>
        <ProductInfoGroup>
          <H3>Description:</H3>
          <SpanDescription>{description}</SpanDescription>
        </ProductInfoGroup>
      </ProductDescriptionInfo>
    </ProductBackground>
  );
};

export default ProductDetails;
