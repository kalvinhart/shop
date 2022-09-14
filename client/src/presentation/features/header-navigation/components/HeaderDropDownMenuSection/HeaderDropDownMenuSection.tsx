import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHeaderDropDownSection } from "../../hooks/useHeaderDropDownSection";

import { HeaderDropDownSubcategories } from "../HeaderDropDownSubcategories";

import {
  DropDownItemsLI,
  DropDownItemsUL,
} from "../HeaderDropDownMenu/HeaderDropDownMenu.styles";
import { DropDownCategory } from "../../types/DropDownCategory";
import { useClickOutside } from "../../../../common/hooks/useClickOutside/useClickOutside";
import { DropDownMenuWrapper } from "./HeaderDropDownMenuSection.styles";

type HeaderDropDownMenuSectionProps = {
  facing: "left" | "right";
  categories?: DropDownCategory[];
  content?: JSX.Element;
  showMenu: boolean;
  setShowMenu: (val: boolean) => void;
  menuRef: React.RefObject<HTMLElement>;
};

const HeaderDropDownMenuSection = ({
  facing,
  categories,
  content,
  showMenu,
  setShowMenu,
  menuRef,
}: HeaderDropDownMenuSectionProps) => {
  useClickOutside(menuRef, () => setShowMenu(false));

  useHeaderDropDownSection(showMenu, setShowMenu);

  return (
    <DropDownMenuWrapper facing={facing}>
      {categories && categories.length > 0 && (
        <DropDownItemsUL>
          {categories.map((item) => (
            <DropDownItemsLI key={item.name}>
              <Link to={item.url} onClick={() => setShowMenu(false)}>
                {item.name}
              </Link>

              {item.subcategories && item.subcategories.length > 0 && (
                <>
                  <FontAwesomeIcon icon={faChevronRight} size="xs" />

                  <HeaderDropDownSubcategories
                    subcategories={item.subcategories}
                    setShowMenu={setShowMenu}
                  />
                </>
              )}
            </DropDownItemsLI>
          ))}
        </DropDownItemsUL>
      )}

      {content && content}
    </DropDownMenuWrapper>
  );
};

export default HeaderDropDownMenuSection;
