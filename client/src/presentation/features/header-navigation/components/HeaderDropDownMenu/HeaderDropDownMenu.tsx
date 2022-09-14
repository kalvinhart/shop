import { useHeaderDropDown } from "../../hooks/useHeaderDropDown";

import { HeaderNavMenuButton } from "../HeaderNavMenuButton";

import { DropDownCategory } from "../../types/DropDownCategory";

import {
  DropDownLI,
  DropDownOverlay,
  DropDownWrapper,
} from "./HeaderDropDownMenu.styles";
import { HeaderDropDownMenuSection } from "../HeaderDropDownMenuSection";

type HeaderDropDownMenuProps = {
  facing: "left" | "right";
  menuTitle: string | JSX.Element;
  categories?: DropDownCategory[];
  content?: JSX.Element;
};

const HeaderDropDownMenu = ({
  facing,
  menuTitle,
  categories,
  content,
}: HeaderDropDownMenuProps) => {
  const { showMenu, menuRef, toggleShowMenu, setShowMenu } = useHeaderDropDown();

  return (
    <DropDownLI>
      {showMenu && <DropDownOverlay id="MenuOverlay" />}

      <DropDownWrapper id="MenuRoot" ref={menuRef}>
        <HeaderNavMenuButton content={menuTitle} onClick={toggleShowMenu} />

        {showMenu && (
          <HeaderDropDownMenuSection
            facing={facing}
            categories={categories}
            content={content}
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
