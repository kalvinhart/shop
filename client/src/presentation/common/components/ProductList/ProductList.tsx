import { Link } from "react-router-dom";

import { Product } from "../../../../domain/models/Product";

import { SpanBold, SpanPrice, SpanRegular } from "../../styles";
import {
  ProductImage,
  ProductItem,
  ProductItemText,
  ProductListItem,
  ProductListUL,
  ProductListWrapper,
} from "./ProductList.styles";

type ProductListProps = {
  products: Product[];
  testId: string;
};

const ProductList = ({ products, testId }: ProductListProps) => {
  return (
    <ProductListWrapper data-testid={testId}>
      <ProductListUL>
        {products.map((product) => (
          <ProductListItem key={product._id} data-testid="productlist-item">
            <ProductItem>
              <Link to={`/product/${product._id}`}>
                <ProductImage src={product.imageUrl} alt={product.name} />
              </Link>

              <ProductItemText>
                <Link to={`/product/${product._id}`}>
                  <SpanBold>{product.name}</SpanBold>
                </Link>

                <SpanRegular>{product.brand}</SpanRegular>
                <SpanPrice>£{product.price.toFixed(2)}</SpanPrice>
              </ProductItemText>
            </ProductItem>
          </ProductListItem>
        ))}
      </ProductListUL>
    </ProductListWrapper>
  );
};

export default ProductList;
