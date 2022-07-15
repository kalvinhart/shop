import { useEffect } from "react";

import { useCategoryState } from "../../../../common/hooks/useCategoryState";
import { DropDownCategory } from "../../types/DropDownCategory";

import { HeaderDropDownMenu } from "../HeaderDropDownMenu";

const HeaderBrowseMenu = () => {
  const { categories, categoriesLoading, categoriesError, loadCategories } =
    useCategoryState();

  useEffect(() => {
    if (categories.length > 0) return;

    loadCategories();
  }, [categories, loadCategories]);

  if (categoriesLoading || categoriesError) return null;

  const menuCategories: DropDownCategory[] = categories.map((c) => ({
    name: c.name,
    url: `/products?category=${c.name}`,
    subcategories: c.subcategories.map((s) => ({
      name: s,
      url: `/products?category=${s}`,
    })),
  }));

  return <HeaderDropDownMenu menuTitle="Browse" categories={menuCategories} />;
};

export default HeaderBrowseMenu;
