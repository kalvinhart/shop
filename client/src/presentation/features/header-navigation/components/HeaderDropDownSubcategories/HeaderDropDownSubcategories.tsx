import { Link } from "react-router-dom";

import { DropDownCategory } from "../../types/DropDownCategory";

import {
  DropDownItemsLI,
  DropDownItemsUL,
} from "../HeaderDropDownMenu/HeaderDropDownMenu.styles";
import { DropDownSubcategoryWrapper } from "./HeaderDropDownSubcategories.styles";

type Props = Pick<DropDownCategory, "subcategories"> & {
  setShowMenu: (val: boolean) => void;
};

const HeaderDropDownSubcategories = ({ subcategories, setShowMenu }: Props) => {
  return (
    <DropDownSubcategoryWrapper>
      <DropDownItemsUL>
        {subcategories!.map((s) => (
          <DropDownItemsLI key={s.name}>
            <Link to={s.url} onClick={() => setShowMenu(false)}>
              {s.name}
            </Link>
          </DropDownItemsLI>
        ))}
      </DropDownItemsUL>
    </DropDownSubcategoryWrapper>
  );
};

export default HeaderDropDownSubcategories;
