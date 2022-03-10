import { Link } from "react-router-dom";
import {
  StyledCardBackground,
  StyledCardImage,
  StyledCardButtonWrapper,
} from "./ProductCard.styles";
import { H3, SpanPrice } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";

const ProductCard = ({ productInfo }) => {
  const { _id, name, price, imageUrl } = productInfo;

  return (
    <StyledCardBackground>
      <Link to={`/product/${_id}`}>
        <StyledCardImage src={imageUrl} alt={name} />
      </Link>
      <H3>{name}</H3>
      <SpanPrice>{`£${price}`}</SpanPrice>
      <StyledCardButtonWrapper>
        <Button as={Link} to="" $primary>
          Add to Cart
        </Button>
        <Button as={Link} to={`/product/${_id}`} $secondary>
          More Details
        </Button>
      </StyledCardButtonWrapper>
    </StyledCardBackground>
  );
};

export default ProductCard;
