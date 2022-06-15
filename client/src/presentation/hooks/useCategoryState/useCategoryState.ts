import { useCallback } from "react";
import { useAppDispatch } from "../../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../../application/hooks/useAppSelector";
import { loadCategories } from "../../../application/slices/thunks/categoriesThunks";

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
