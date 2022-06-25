import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";
import { H2 } from "../../styles/fontStyles";
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
