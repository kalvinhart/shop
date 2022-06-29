import { useCallback } from "react";

import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../../app/hooks/useAppSelector";

import {
  addToFilters,
  clearFilters,
  removeFromFilters,
} from "../../../features/filters/slice/filtersSlice";

type FiltersParams = {
  filterName: string;
  filterValue: string;
};

export const useFilterState = () => {
  const dispatch = useAppDispatch();

  const { filters, isFiltered, selectedFilters } = useAppSelector(
    (state) => state.filters
  );

  return {
    filters,
    isFiltered,
    selectedFilters,
    addToFilters: useCallback(
      (data: FiltersParams) => {
        dispatch(addToFilters(data));
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
