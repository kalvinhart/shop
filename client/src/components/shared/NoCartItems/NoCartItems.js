import { Link } from "react-router-dom";
import { Button } from "../../../styles/buttonStyles";
import { StyledParagraph } from "../../../styles/fontStyles";
import { StyledNoItemsWrapper } from "./NoCartItems.styles";

const NoCartItems = () => {
  return (
    <StyledNoItemsWrapper>
      <StyledParagraph>You have no items in your cart.</StyledParagraph>
      <Button as={Link} to="/" $primary>
        Continue Shopping
      </Button>
    </StyledNoItemsWrapper>
  );
};

export default NoCartItems;
