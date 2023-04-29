import { useHeaderDropDown } from "../../hooks/useHeaderDropDown";

import { HeaderNavMenuButton } from "../HeaderNavMenuButton";

import { DropDownCategory } from "../../types/DropDownCategory";

import {
  DropDownLI,
  DropDownOverlay,
  DropDownWrapper,
} from "./HeaderDropDownMenu.styles";
import { HeaderDropDownMenuSection } from "../HeaderDropDownMenuSection";
import { useDropDownContext } from "../../hooks/useDropDownContext";
import DropDownProvider from "../../context/DropDownContext";

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
  const { menuRef } = useHeaderDropDown();
  const { showMenu, toggleShowMenu, setShowMenu } = useDropDownContext();

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

const HeaderDropDownMenuWithContext = ({
  facing,
  menuTitle,
  categories,
  content,
}: HeaderDropDownMenuProps) => {
  return (
    <DropDownProvider>
      <HeaderDropDownMenu
        facing={facing}
        menuTitle={menuTitle}
        categories={categories}
        content={content}
      />
    </DropDownProvider>
  );
};

export default HeaderDropDownMenuWithContext;
