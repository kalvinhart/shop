import { useNavigate } from "react-router-dom";

import { Button } from "../../../../common/components/Button";

import { StyledParagraph } from "../../../../common/styles/";
import { StyledNoItemsWrapper } from "./NoCartItems.styles";

const NoCartItems = () => {
  const navigate = useNavigate();

  return (
    <StyledNoItemsWrapper>
      <StyledParagraph>You have no items in your cart.</StyledParagraph>
      <Button variant="primary" onClick={() => navigate("/")}>
        Continue Shopping
      </Button>
    </StyledNoItemsWrapper>
  );
};

export default NoCartItems;
