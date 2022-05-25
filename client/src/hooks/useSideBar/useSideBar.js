import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../slices/thunks/categoriesThunks";
import { updateSearchOptions } from "../../slices/productSlice";

export const useSideBar = () => {
  const dispatch = useDispatch();

  const { loading, categories } = useSelector((state) => state.categories);
  const { searchOptions } = useSelector((state) => state.products);

  useEffect(() => {
    if (categories.length > 0) return;

    dispatch(loadCategories());
  }, []);

  const handleCategoryChange = (category) => {
    dispatch(updateSearchOptions("categories", category));
  };

  return {
    loading,
    categories,
    searchOptions,
    handleCategoryChange: (category) => handleCategoryChange(category),
  };
};
