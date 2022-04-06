import { Link } from "react-router-dom";
import {
  StyledCardBackground,
  StyledCardImage,
  StyledCardButtonWrapper,
} from "./ProductCard.styles";
import { H3, SpanPrice } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";

const ProductCard = ({ productInfo, addToCart }) => {
  const { _id, name, brand, size, color, price, imageUrl } = productInfo;

  const handleAddToCart = () => {
    const itemToAdd = {
      id: _id,
      brand,
      color,
      imageUrl,
      name,
      price,
      qty: 1,
      size,
    };
    addToCart(itemToAdd);
  };

  return (
    <StyledCardBackground>
      <Link to={`/product/${_id}`}>
        <StyledCardImage src={imageUrl} alt={name} />
      </Link>
      <H3>{name}</H3>
      <SpanPrice>{`£${price}`}</SpanPrice>
      <StyledCardButtonWrapper>
        <Button onClick={handleAddToCart} $primary>
          Add to Cart
        </Button>
        <Link to={`/product/${_id}`}>More Details</Link>
      </StyledCardButtonWrapper>
    </StyledCardBackground>
  );
};

export default ProductCard;
