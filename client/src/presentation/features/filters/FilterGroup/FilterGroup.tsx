import { useFilterState } from "../../../common/hooks/useFilterState/useFilterState";

import { Filters } from "../../../../infrastructure/services/interfaces/IProductService";
import { SelectedFilters } from "../../../app/slices/productSlice";

import Checkbox from "../../../common/components/Checkbox/Checkbox";

import { filterIsEmpty } from "../utils/filters";

import { FilterGroupWrapper, FiltersWrapper } from "./FilterGroup.styles";
import { SpanBold } from "../../../common/styles";

type FilterGroupProps = {
  heading: string;
  items: Filters[];
};

const FilterGroup = ({ heading, items }: FilterGroupProps) => {
  const { selectedFilters, addToFilters, removeFromFilters } = useFilterState();

  const handleChange = (e: React.SyntheticEvent, filterName: string) => {
    const filterIndex = heading.toLowerCase();
    const filterValue = filterName.toLowerCase();

    const payload = {
      filterName: filterIndex,
      filterValue,
    };

    if ((e.target as HTMLInputElement).checked) {
      addToFilters(payload);
    } else {
      removeFromFilters(payload);
    }
  };

  return (
    <FilterGroupWrapper>
      <SpanBold>{heading}:</SpanBold>
      <FiltersWrapper>
        {items.map((item) => {
          if (!filterIsEmpty(item)) {
            return (
              <Checkbox
                key={item._id}
                label={item._id}
                checked={selectedFilters[
                  heading.toLowerCase() as keyof SelectedFilters
                ].includes(item._id.toLowerCase())}
                onChange={(e: React.SyntheticEvent) => handleChange(e, item._id)}
              />
            );
          } else {
            return null;
          }
        })}
      </FiltersWrapper>
    </FilterGroupWrapper>
  );
};

export default FilterGroup;
