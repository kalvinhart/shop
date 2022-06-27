import { Filters } from "../../../../infrastructure/services/interfaces/IProductService";

import Checkbox from "../Checkbox/Checkbox";

import { FilterGroupWrapper, FiltersWrapper } from "./FilterGroup.styles";
import { SpanBold } from "../../../styles/fontStyles";
import { filterIsEmpty } from "../../../utils/filters";

type FilterGroupProps = {
  heading: string;
  items: Filters[];
  onChange: () => void;
};

const FilterGroup = ({ heading, items, onChange }: FilterGroupProps) => {
  return (
    <FilterGroupWrapper>
      <SpanBold>{heading}:</SpanBold>
      <FiltersWrapper>
        {items.map((item) => {
          if (!filterIsEmpty(item)) {
            return <Checkbox key={item._id} label={item._id} onChange={onChange} />;
          } else {
            return null;
          }
        })}
      </FiltersWrapper>
    </FilterGroupWrapper>
  );
};

export default FilterGroup;
