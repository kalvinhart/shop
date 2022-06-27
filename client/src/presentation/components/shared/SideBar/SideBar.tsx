import { useEffect } from "react";

import { useProductState } from "../../../hooks/useProductState/useProductState";

import { filtersAreEmpty } from "../../../utils/filters";

import FilterGroup from "../FilterGroup/FilterGroup";

import { H3 } from "../../../styles/fontStyles";
import { StyledSideBarBackground } from "./SideBar.styles";

const SideBar = () => {
  const { filters, loadFilters } = useProductState();

  useEffect(() => {
    if (filters === null) {
      loadFilters();
    }
  }, [filters, loadFilters]);

  return (
    <>
      <StyledSideBarBackground>
        <H3>Filters:</H3>
        {filters && filters.allBrands.length > 0 && (
          <FilterGroup heading="Brand" items={filters.allBrands} onChange={() => {}} />
        )}

        {filters && !filtersAreEmpty(filters.allColors) && (
          <FilterGroup heading="Color" items={filters.allColors} onChange={() => {}} />
        )}

        {filters && !filtersAreEmpty(filters.allSizes) && (
          <FilterGroup heading="Size" items={filters.allSizes} onChange={() => {}} />
        )}
      </StyledSideBarBackground>
    </>
  );
};

export default SideBar;
