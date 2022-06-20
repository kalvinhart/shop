import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

import {
  StyledAddToCartWrapper,
  StyledPurchaseButtonsWrapper,
  StyledQuantityWrapper,
  StyledQuantityTotalWrapper,
  StyledTotalWrapper,
} from "./AddToCart.styles";
import { H3, SpanPrice } from "../../../styles/fontStyles";
import QuantityPicker from "../../shared/QuantityPicker/QuantityPicker";
import { useAddToCart } from "../hooks/useAddToCart";
import Button from "../../shared/Button/Button";
import { Product } from "../../../../domain/models/Product";

type AddToCartProps = {
  product: Product;
};

const AddToCart = ({ product }: AddToCartProps) => {
  const {
    id,
    quantity,
    price,
    stockQty,
    isWishlisted,
    handleQuantityChange,
    handleAddToCart,
    addProductToWishlist,
    deleteFromWishlist,
  } = useAddToCart(product);

  const handleWishlistClick = () => {
    isWishlisted ? deleteFromWishlist(id) : addProductToWishlist(id);
  };

  return (
    <StyledAddToCartWrapper>
      <StyledQuantityTotalWrapper>
        <StyledQuantityWrapper>
          <H3>Quantity:</H3>
          <QuantityPicker
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
          />
        </StyledQuantityWrapper>

        <StyledTotalWrapper>
          <H3>Total:</H3>
          <SpanPrice data-testid="TotalPriceTest">
            £{(quantity * price).toFixed(2)}
          </SpanPrice>
        </StyledTotalWrapper>
      </StyledQuantityTotalWrapper>

      <StyledPurchaseButtonsWrapper>
        <Button
          variant="primary"
          onClick={handleAddToCart}
          disabled={stockQty === 0 || quantity > stockQty}
          size="large"
        >
          Add to Cart
        </Button>
        <Button variant="secondary" size="large" onClick={handleWishlistClick}>
          {isWishlisted ? (
            <FontAwesomeIcon icon={faHeartBroken} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faHeart} size="lg" />
          )}
          Wishlist
        </Button>
      </StyledPurchaseButtonsWrapper>
    </StyledAddToCartWrapper>
  );
};

export default AddToCart;
