import { useEffect } from "react";

import { useProductState } from "../../../hooks/useProductState/useProductState";

import { filtersAreEmpty } from "../../../utils/filters";

import FilterGroup from "../FilterGroup/FilterGroup";

import { useSearchParams } from "react-router-dom";

import Button from "../Button/Button";

import { StyledSideBarBackground } from "./SideBar.styles";
import { H3 } from "../../../styles/fontStyles";
import {
  formatOldSearchParams,
  handleSearchParamsOnFilterChange,
} from "../../../utils/formatSearchParams";
import { SelectedFilters } from "../../../../application/slices/productSlice";

const SideBar = () => {
  const { filters, selectedFilters, isFiltered, loadFilters, clearFilters } =
    useProductState();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (filters === null) {
      loadFilters();
    }
  }, [filters, loadFilters]);

  const applyFilters = () => {
    const newParams = handleSearchParamsOnFilterChange(searchParams, selectedFilters);

    setSearchParams(newParams);
  };

  const removeFilters = () => {
    clearFilters();

    const params = formatOldSearchParams(searchParams);

    ["brand", "color", "size"].forEach((filter) => {
      delete params[filter];
    });

    setSearchParams(params);
  };

  return (
    <>
      <StyledSideBarBackground>
        <H3>Filters:</H3>
        <Button variant="primary" disabled={!isFiltered} onClick={applyFilters}>
          Apply Filters
        </Button>
        <Button variant="secondary" disabled={!isFiltered} onClick={removeFilters}>
          Reset Filters
        </Button>
        {filters && filters.allBrands.length > 0 && (
          <FilterGroup heading="Brand" items={filters.allBrands} />
        )}

        {filters && !filtersAreEmpty(filters.allColors) && (
          <FilterGroup heading="Color" items={filters.allColors} />
        )}

        {filters && !filtersAreEmpty(filters.allSizes) && (
          <FilterGroup heading="Size" items={filters.allSizes} />
        )}
      </StyledSideBarBackground>
    </>
  );
};

export default SideBar;
