import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import { StyledHeader, StyledHeaderWrapper, StyledLowerHeader } from "./Header.styles";
import { SpanLogo } from "../../../styles/fontStyles";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderUserNav from "../HeaderUserNav/HeaderUserNav";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <SpanLogo as={Link} to="/">
          My eShop
        </SpanLogo>

        <StyledLowerHeader>
          <HeaderNav />
          <SearchBar />
        </StyledLowerHeader>

        <HeaderUserNav />
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
