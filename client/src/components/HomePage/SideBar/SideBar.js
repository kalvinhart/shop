import { Link } from "react-router-dom";
import { H2 } from "../../../styles/fontStyles";
import {
  StyledSideBarBackground,
  StyledNav,
  StyledNavUL,
  StyledNavLI,
} from "./SideBar.styles";

const SideBar = () => {
  return (
    <StyledSideBarBackground>
      <H2>Categories:</H2>
      <StyledNav>
        <StyledNavUL>
          <StyledNavLI>
            <Link to="/">Item 1</Link>
          </StyledNavLI>
          <StyledNavLI>
            <Link to="/">Item 2</Link>
          </StyledNavLI>
          <StyledNavLI>
            <Link to="/">Item 3</Link>
          </StyledNavLI>
          <StyledNavLI>
            <Link to="/">Item 4</Link>
          </StyledNavLI>
          <StyledNavLI>
            <Link to="/">Item 5</Link>
          </StyledNavLI>
        </StyledNavUL>
      </StyledNav>
    </StyledSideBarBackground>
  );
};

export default SideBar;
