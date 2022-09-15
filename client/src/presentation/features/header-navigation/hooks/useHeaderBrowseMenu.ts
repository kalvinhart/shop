import { useEffect } from "react";
import { useCategoryState } from "../../../common/hooks/useCategoryState";

export const useHeaderBrowseMenu = () => {
  const { categories, categoriesLoading, categoriesError, loadCategories } =
    useCategoryState();

  useEffect(() => {
    if (categories.length > 0) return;

    loadCategories();
  }, [categories, loadCategories]);

  return {
    categories,
    categoriesLoading,
    categoriesError,
  };
};
