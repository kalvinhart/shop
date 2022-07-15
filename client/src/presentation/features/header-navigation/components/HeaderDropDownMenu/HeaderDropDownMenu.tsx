import { useRef, useState } from "react";

import { HeaderNavMenuButton } from "../HeaderNavMenuButton";

import { DropDownCategory } from "../../types/DropDownCategory";

import {
  DropDownLI,
  DropDownOverlay,
  DropDownWrapper,
} from "./HeaderDropDownMenu.styles";
import { HeaderDropDownMenuSection } from "../HeaderDropDownMenuSection";

type HeaderDropDownMenuProps = {
  menuTitle: string | JSX.Element;
  categories: DropDownCategory[];
};

const HeaderDropDownMenu = ({ menuTitle, categories }: HeaderDropDownMenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <DropDownLI>
      {showMenu && <DropDownOverlay id="MenuOverlay" />}

      <DropDownWrapper id="MenuRoot" ref={menuRef}>
        <HeaderNavMenuButton content={menuTitle} onClick={toggleShowMenu} />

        {showMenu && (
          <HeaderDropDownMenuSection
            categories={categories}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            menuRef={menuRef}
          />
        )}
      </DropDownWrapper>
    </DropDownLI>
  );
};

export default HeaderDropDownMenu;
