import { HeaderNavNav, HeaderNavUL } from "./HeaderNav.styles";
import { HeaderBrowseMenu } from "../HeaderBrowseMenu";

const HeaderNav = () => {
  return (
    <HeaderNavNav>
      <HeaderNavUL>
        <HeaderBrowseMenu />
      </HeaderNavUL>
    </HeaderNavNav>
  );
};

export default HeaderNav;
