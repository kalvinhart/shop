import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../styles/buttonStyles";
import { StyledParagraph } from "../../../styles/fontStyles";
import { StyledNoItemsWrapper } from "./NoCartItems.styles";

const NoCartItems = () => {
  const navigate = useNavigate();

  return (
    <StyledNoItemsWrapper>
      <StyledParagraph>You have no items in your cart.</StyledParagraph>
      <Button type="primary" onClick={() => navigate("/")}>
        Continue Shopping
      </Button>
    </StyledNoItemsWrapper>
  );
};

export default NoCartItems;
