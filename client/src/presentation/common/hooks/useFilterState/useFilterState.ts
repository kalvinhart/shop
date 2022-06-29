import { useCallback } from "react";

import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../../app/hooks/useAppSelector";

import {
  addToFilters,
  clearFilters,
  removeFromFilters,
  setFiltersApplied,
} from "../../../features/filters/slice/filtersSlice";

type FiltersParams = {
  filterName: string;
  filterValue: string;
};

export const useFilterState = () => {
  const dispatch = useAppDispatch();

  const { filters, isFiltered, isFilterApplied, selectedFilters } = useAppSelector(
    (state) => state.filters
  );

  return {
    filters,
    isFiltered,
    isFilterApplied,
    selectedFilters,
    addToFilters: useCallback(
      (data: FiltersParams) => {
        dispatch(addToFilters(data));
      },
      [dispatch]
    ),
    setFiltersApplied: useCallback(
      (value: boolean) => {
        dispatch(setFiltersApplied(value));
      },
      [dispatch]
    ),
    removeFromFilters: useCallback(
      (data: FiltersParams) => {
        dispatch(removeFromFilters(data));
      },
      [dispatch]
    ),
    clearFilters: useCallback(() => {
      dispatch(clearFilters());
    }, [dispatch]),
  };
};
