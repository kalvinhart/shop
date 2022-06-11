import { useEffect } from "react";
import { loadCategories } from "../../application/slices/thunks/categoriesThunks.ts";
import { updateSearchOptions } from "../../application/slices/productSlice";
import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../application/hooks/useAppSelector";

export const useSideBar = () => {
  const dispatch = useAppDispatch();

  const { loading, categories } = useAppSelector((state) => state.categories);
  const { searchOptions } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (categories.length > 0) return;

    dispatch(loadCategories());
  }, []);

  const handleCategoryChange = (category) => {
    dispatch(updateSearchOptions({ option: "categories", newOption: category }));
  };

  return {
    loading,
    categories,
    searchOptions,
    handleCategoryChange: (category) => handleCategoryChange(category),
  };
};
