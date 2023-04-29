import { useCallback } from "react";

import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../../app/hooks/useAppSelector";

import {
  addToFilters,
  clearFilters,
  loadFilters,
  removeFromFilters,
  setFiltersApplied,
} from "../../../features/filters/slice/filtersSlice";

type FiltersParams = {
  filterName: string;
  filterValue: string;
};

export const useFilterState = () => {
  const dispatch = useAppDispatch();

  const { loading, filters, isFiltered, isFilterApplied, selectedFilters } =
    useAppSelector((state) => state.filters);

  return {
    loading,
    filters,
    isFiltered,
    isFilterApplied,
    selectedFilters,
    loadFilters: useCallback(() => {
      dispatch(loadFilters());
    }, [dispatch]),
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
