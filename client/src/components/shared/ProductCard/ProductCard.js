import { Link, useNavigate } from "react-router-dom";
import {
  StyledCardBackground,
  StyledCardImage,
  StyledCardButtonWrapper,
} from "./ProductCard.styles";
import { H3, SpanPrice } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";

const ProductCard = ({ productInfo }) => {
  const { id, name, price, imageUrl } = productInfo;
  const navigate = useNavigate();

  return (
    <StyledCardBackground>
      <Link to={`/product/${id}`}>
        <StyledCardImage src={imageUrl} alt={name} />
      </Link>
      <H3>{name}</H3>
      <SpanPrice>{`£${price}`}</SpanPrice>
      <StyledCardButtonWrapper>
        <Button primary>Add to Cart</Button>
        <Button secondary onClick={() => navigate(`/product/${id}`)}>
          More Details
        </Button>
      </StyledCardButtonWrapper>
    </StyledCardBackground>
  );
};

export default ProductCard;
