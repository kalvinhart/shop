import { Link } from "react-router-dom";

import SearchBar from "../../../features/search-bar/SearchBar/SearchBar";

import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderUserNav from "../HeaderUserNav/HeaderUserNav";

import { StyledHeader, StyledHeaderWrapper, StyledLowerHeader } from "./Header.styles";
import { SpanLogo } from "../../../common/styles";

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
