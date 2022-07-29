import { useSearchParams } from "react-router-dom";

import { useFilterState } from "../../../common/hooks/useFilterState/useFilterState";

import {
  formatOldSearchParams,
  handleSearchParamsOnFilterChange,
} from "../../../common/utils/formatSearchParams";
import { filtersAreEmpty } from "../utils/filters";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import FilterGroup from "../FilterGroup/FilterGroup";
import Button from "../../../common/components/Button/Button";

import { CloseFiltersButton, FiltersOverlay, SideBarBackground } from "./SideBar.styles";
import { H3 } from "../../../common/styles";
import { useEffect } from "react";

type SideBarProps = {
  show: boolean;
  setShow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const SideBar = ({ show, setShow }: SideBarProps) => {
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

  return (
    <>
      <SideBarBackground className={show ? "show" : ""}>
        <CloseFiltersButton onClick={() => setShow(false)}>
          Close Filters
          <FontAwesomeIcon icon={faTimes} />
        </CloseFiltersButton>

        <H3>Filters:</H3>
        <Button variant="primary" disabled={!isFiltered} onClick={applyFilters}>
          Apply Filters
        </Button>
        <Button
          variant="secondary"
          disabled={!isFiltered && !isFilterApplied}
          onClick={removeFilters}
        >
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
      </SideBarBackground>
      <FiltersOverlay data-name="filterOverlay" />
    </>
  );
};

export default SideBar;
