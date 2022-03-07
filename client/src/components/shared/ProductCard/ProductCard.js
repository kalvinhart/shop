import { Link } from "react-router-dom";
import {
  StyledCardBackground,
  StyledCardImage,
  StyledCardButtonWrapper,
} from "./ProductCard.styles";
import { H3, SpanPrice } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";

const ProductCard = () => {
  return (
    <StyledCardBackground>
      <Link to="">
        <StyledCardImage src="" alt="" />
      </Link>
      <H3>Product Name</H3>
      <SpanPrice>£44.99</SpanPrice>
      <StyledCardButtonWrapper>
        <Button primary>Add to Cart</Button>
        <Button secondary>More Details</Button>
      </StyledCardButtonWrapper>
    </StyledCardBackground>
  );
};

export default ProductCard;
