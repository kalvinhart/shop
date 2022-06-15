import { useEffect } from "react";

import { useProductState } from "../../../hooks/shared/useProductState/useProductState";
import { useCategoryState } from "../../../hooks/shared/useCategoryState/useCategoryState";

export const useSideBar = () => {

  const { categoriesLoading, categories, loadCategories } = useCategoryState();
  const { searchOptions, updateSearchOptions } = useProductState();

  useEffect(() => {
    if (categories.length > 0) return;

    loadCategories();
  }, [categories, loadCategories]);

  const handleCategoryChange = (category: string) => {
    updateSearchOptions({ option: "categories", newOption: category });
  };

  return {
    categoriesLoading,
    categories,
    searchOptions,
    handleCategoryChange: (category: string) => handleCategoryChange(category),
  };
};
