import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HeaderNavMenuButton } from "../HeaderNavMenuButton";
import { HeaderDropDownSubcategories } from "../HeaderDropDownSubcategories";

import {
  DropDownItemsLI,
  DropDownItemsUL,
  DropDownLI,
  DropDownMenuWrapper,
  DropDownWrapper,
} from "./HeaderDropDownMenu.styles";

export type DropDownCategory = {
  name: string;
  url: string;
  subcategories?: {
    name: string;
    url: string;
  }[];
};

type HeaderDropDownMenuProps = {
  menuTitle: string;
  categories: DropDownCategory[];
};

const HeaderDropDownMenu = ({ menuTitle, categories }: HeaderDropDownMenuProps) => {
  return (
    <DropDownLI>
      <DropDownWrapper>
        <HeaderNavMenuButton text={menuTitle} />

        <DropDownMenuWrapper>
          <DropDownItemsUL>
            {categories.map((item) => (
              <>
                <DropDownItemsLI key={item.name}>
                  <Link to={item.url}>{item.name}</Link>

                  {item.subcategories && item.subcategories.length > 0 && (
                    <>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />

                      <HeaderDropDownSubcategories subcategories={item.subcategories} />
                    </>
                  )}
                </DropDownItemsLI>
              </>
            ))}
          </DropDownItemsUL>
        </DropDownMenuWrapper>
      </DropDownWrapper>
    </DropDownLI>
  );
};

export default HeaderDropDownMenu;
