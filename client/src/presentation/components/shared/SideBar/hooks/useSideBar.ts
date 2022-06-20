import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useCategoryState } from "../../../../hooks/useCategoryState/useCategoryState";

import {
  formatOldSearchParams,
  removeSearchParam,
} from "../../../../utils/formatSearchParams";

export const useSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoriesLoading, categories, loadCategories } = useCategoryState();

  useEffect(() => {
    if (categories.length > 0) return;

    loadCategories();
  }, [categories, loadCategories]);

  const showAllCategories = () => {
    const newParams = removeSearchParam(searchParams, "category");

    setSearchParams(newParams);
  };

  const showCategory = (category: string) => {
    const oldParams = formatOldSearchParams(searchParams);
    const newParams = {
      ...oldParams,
      category,
    };

    setSearchParams(newParams);
  };

  return {
    categoriesLoading,
    categories,
    searchParams,
    showCategory,
    showAllCategories,
  };
};
