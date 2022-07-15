import { useEffect } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useCategoryState } from "../../../../common/hooks/useCategoryState";
import { DropDownCategory } from "../../types/DropDownCategory";

import { HeaderDropDownMenu } from "../HeaderDropDownMenu";
import { SpanRegular } from "../../../../common/styles";

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

  return (
    <HeaderDropDownMenu
      menuTitle={
        <>
          <SpanRegular>Browse</SpanRegular>
          <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </>
      }
      categories={menuCategories}
    />
  );
};

export default HeaderBrowseMenu;
