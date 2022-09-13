import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHeaderDropDownSection } from "../../hooks/useHeaderDropDownSection";

import { HeaderDropDownSubcategories } from "../HeaderDropDownSubcategories";

import {
  DropDownItemsLI,
  DropDownItemsUL,
  DropDownMenuWrapper,
} from "../HeaderDropDownMenu/HeaderDropDownMenu.styles";
import { DropDownCategory } from "../../types/DropDownCategory";
import { useClickOutside } from "../../../../common/hooks/useClickOutside/useClickOutside";

type HeaderDropDownMenuSectionProps = {
  categories: DropDownCategory[];
  showMenu: boolean;
  setShowMenu: (val: boolean) => void;
  menuRef: React.RefObject<HTMLElement>;
};

const HeaderDropDownMenuSection = ({
  categories,
  showMenu,
  setShowMenu,
  menuRef,
}: HeaderDropDownMenuSectionProps) => {
  useClickOutside(menuRef, () => setShowMenu(false));

  useHeaderDropDownSection(showMenu, setShowMenu);

  return (
    <DropDownMenuWrapper>
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
    </DropDownMenuWrapper>
  );
};

export default HeaderDropDownMenuSection;
