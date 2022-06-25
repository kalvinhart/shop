import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  StyledCardBackground,
  StyledCardImage,
  StyledCardButtonWrapper,
} from "./ProductCard.styles";
import { H3, SpanPrice } from "../../../styles/fontStyles";
import { useProductCard } from "./hooks/useProductCard";
import Button from "../Button/Button";
import { Product } from "../../../../domain/models/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "../../../hooks/useAuthState/useAuthState";

type ProductCardProps = {
  productInfo: Product;
};

const ProductCard = ({ productInfo }: ProductCardProps) => {
  const { id, name, price, imageUrl, isWishlisted, handleAddToCart, handleWishlist } =
    useProductCard(productInfo);

  const { user } = useAuthState();
  const navigate = useNavigate();
  const location = useLocation();

  const handleWishlistClick = () => {
    if (user === null) {
      navigate("/login", { state: { from: location } });
    } else {
      handleWishlist();
    }
  };

  return (
    <StyledCardBackground>
      <Button
        variant="icon"
        onClick={handleWishlistClick}
        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        <FontAwesomeIcon icon={isWishlisted ? faHeartBroken : faHeart} />
      </Button>

      <Link className="imageLink" to={`/product/${id}`}>
        <StyledCardImage src={imageUrl} alt={name} />
      </Link>
      <H3>{name}</H3>
      <SpanPrice>{`£${price}`}</SpanPrice>
      <StyledCardButtonWrapper>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Link to={`/product/${id}`}>More Details</Link>
      </StyledCardButtonWrapper>
    </StyledCardBackground>
  );
};

export default ProductCard;
