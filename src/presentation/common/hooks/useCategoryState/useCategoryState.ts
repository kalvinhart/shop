import { useCallback } from "react";

import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../../app/hooks/useAppSelector";

import { loadCategories } from "../../../app/slices/thunks/categoriesThunks";

export const useCategoryState = () => {
  const dispatch = useAppDispatch();
  const {
    categories,
    error: categoriesError,
    loading: categoriesLoading,
  } = useAppSelector((state) => state.categories);

  return {
    categories,
    categoriesError,
    categoriesLoading,
    loadCategories: useCallback(() => {
      dispatch(loadCategories());
    }, [dispatch]),
  };
};
