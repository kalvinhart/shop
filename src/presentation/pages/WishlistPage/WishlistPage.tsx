import { usePageTitle } from "../../common/hooks/usePageTitle";

import { H2 } from "../../common/styles";
import { StyledWishListWrapper } from "./WishlistPage.styles";

const WishlistPage = () => {
  usePageTitle("Wishlist");

  return (
    <StyledWishListWrapper>
      <H2>Your Wishlist</H2>
    </StyledWishListWrapper>
  );
};

export default WishlistPage;
