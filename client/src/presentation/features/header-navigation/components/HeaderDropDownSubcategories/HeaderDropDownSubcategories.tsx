import { Link } from "react-router-dom";

import { DropDownCategory } from "../HeaderDropDownMenu";

import {
  DropDownItemsLI,
  DropDownItemsUL,
} from "../HeaderDropDownMenu/HeaderDropDownMenu.styles";
import { DropDownSubcategoryWrapper } from "./HeaderDropDownSubcategories.styles";

type Props = Pick<DropDownCategory, "subcategories">;

const HeaderDropDownSubcategories = ({ subcategories }: Props) => {
  return (
    <DropDownSubcategoryWrapper>
      <DropDownItemsUL>
        {subcategories!.map((s) => (
          <DropDownItemsLI key={s.name}>
            <Link to={s.url}>{s.name}</Link>
          </DropDownItemsLI>
        ))}
      </DropDownItemsUL>
    </DropDownSubcategoryWrapper>
  );
};

export default HeaderDropDownSubcategories;
