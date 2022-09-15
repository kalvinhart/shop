import { useState } from "react";

import { useFilterState } from "../../../common/hooks/useFilterState/useFilterState";
import { filterIsEmpty } from "../utils/filters";

import { Filters } from "../../../../infrastructure/services/interfaces/IProductService";

export const useFilterGroup = (heading: string, items: Filters[]) => {
  const { selectedFilters, addToFilters, removeFromFilters } = useFilterState();
  const [isExpanded, setIsExpanded] = useState(false);

  const filtersRenderLimit = 8;
  const doesExceedRenderLimit = items.length > filtersRenderLimit;

  let filtersToShow: Filters[];

  if (doesExceedRenderLimit && !isExpanded) {
    filtersToShow = items.slice(0, filtersRenderLimit);
  } else {
    filtersToShow = items;
  }

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

  return {
    filtersToShow,
    selectedFilters,
    isExpanded,
    setIsExpanded,
    doesExceedRenderLimit,
    handleChange,
    filterIsEmpty,
  };
};
