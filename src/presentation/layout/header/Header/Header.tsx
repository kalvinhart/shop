import { Link } from "react-router-dom";

import SearchBar from "../../../features/search-bar/SearchBar/SearchBar";

import { HeaderNav } from "../../../features/header-navigation";
import HeaderUserNav from "../HeaderUserNav/HeaderUserNav";

import { StyledHeader, HeaderWrapper, StyledLowerHeader } from "./Header.styles";
import { SpanLogo } from "../../../common/styles";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <SpanLogo as={Link} to="/" section="header">
          My eShop
        </SpanLogo>

        <StyledLowerHeader>
          <HeaderNav />
          <SearchBar />
        </StyledLowerHeader>

        <HeaderUserNav />
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
