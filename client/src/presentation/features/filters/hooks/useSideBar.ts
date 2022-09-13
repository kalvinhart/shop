import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useFilterState } from "../../../common/hooks/useFilterState/useFilterState";
import {
  formatOldSearchParams,
  handleSearchParamsOnFilterChange,
} from "../../../common/utils/formatSearchParams";
import { filtersAreEmpty } from "../utils/filters";

export const useSideBar = (setShow: (val: boolean) => void) => {
  const {
    loading,
    loadFilters,
    filters,
    selectedFilters,
    isFiltered,
    isFilterApplied,
    setFiltersApplied,
    clearFilters,
  } = useFilterState();

  useEffect(() => {
    if (!loading && !filters) {
      loadFilters();
    }
  }, [loading, filters, loadFilters]);

  const [searchParams, setSearchParams] = useSearchParams();

  const applyFilters = () => {
    const newParams = handleSearchParamsOnFilterChange(searchParams, selectedFilters);

    setSearchParams(newParams);
    setFiltersApplied(true);
    setShow(false);
  };

  const removeFilters = () => {
    clearFilters();

    const params = formatOldSearchParams(searchParams);

    ["brand", "color", "size"].forEach((filter) => {
      delete params[filter];
    });

    setSearchParams(params);
    setFiltersApplied(false);
    setShow(false);
  };

  return {
    filters,
    isFiltered,
    isFilterApplied,
    applyFilters,
    removeFilters,
    filtersAreEmpty,
  };
};
