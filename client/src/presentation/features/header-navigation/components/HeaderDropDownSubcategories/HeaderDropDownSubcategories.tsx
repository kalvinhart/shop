import { SpanRegular } from "../../../../common/styles";

import { DropDownCategory } from "../../types/DropDownCategory";

import {
  DropDownItemsLI,
  DropDownItemsUL,
} from "../HeaderDropDownMenu/HeaderDropDownMenu.styles";
import { DropDownSubcategoryWrapper } from "./HeaderDropDownSubcategories.styles";

type Props = Pick<DropDownCategory, "subcategories"> & {
  navigate: (url: string) => void;
};

const HeaderDropDownSubcategories = ({ subcategories, navigate }: Props) => {
  return (
    <DropDownSubcategoryWrapper>
      <DropDownItemsUL>
        {subcategories!.map((s) => (
          <DropDownItemsLI
            key={s.name}
            onClick={() => navigate(s.url)}
            tabIndex={0}
            data-url={s.url}
          >
            <SpanRegular>{s.name}</SpanRegular>
          </DropDownItemsLI>
        ))}
      </DropDownItemsUL>
    </DropDownSubcategoryWrapper>
  );
};

export default HeaderDropDownSubcategories;
