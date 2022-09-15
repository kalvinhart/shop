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
import { SpanRegular } from "../../../../common/styles";
import { useDropDownContext } from "../../hooks/useDropDownContext";

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
  const { navigateTo } = useDropDownContext();
  useHeaderDropDownSection(showMenu, setShowMenu, navigateTo);

  return (
    <DropDownMenuWrapper facing={facing}>
      {categories && categories.length > 0 && (
        <DropDownItemsUL>
          {categories.map((item) => (
            <DropDownItemsLI
              key={item.name}
              tabIndex={0}
              onClick={(e: React.MouseEvent) => navigateTo(item.url, e)}
              data-url={item.url}
            >
              <SpanRegular>{item.name}</SpanRegular>

              {item.subcategories && item.subcategories.length > 0 && (
                <>
                  <FontAwesomeIcon icon={faChevronRight} size="xs" />

                  <HeaderDropDownSubcategories
                    navigate={navigateTo}
                    subcategories={item.subcategories}
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
