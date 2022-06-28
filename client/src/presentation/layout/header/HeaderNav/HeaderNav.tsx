import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useCategoryState } from "../../../common/hooks/useCategoryState/";

import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  HeaderBrowseWrapper,
  HeaderCategoriesLI,
  HeaderCategoriesUL,
  HeaderNavNav,
  HeaderNavItem,
  HeaderNavItemsWrapper,
  HeaderNavLI,
  HeaderNavUL,
  HeaderSubcategoryWrapper,
} from "./HeaderNav.styles";

const HeaderNav = () => {
  const { categories, categoriesLoading, categoriesError, loadCategories } =
    useCategoryState();

  useEffect(() => {
    if (categories.length > 0) return;

    loadCategories();
  }, [categories, loadCategories]);

  if (categoriesLoading || categoriesError) return null;

  return (
    <HeaderNavNav>
      <HeaderNavUL>
        <HeaderNavLI>
          <HeaderNavItemsWrapper>
            <HeaderNavItem>
              Browse
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </HeaderNavItem>

            <HeaderBrowseWrapper>
              <HeaderCategoriesUL>
                {categories.map((category) => (
                  <HeaderCategoriesLI key={category.name}>
                    <Link to={`/products?category=${category.name}`}>
                      {category.name}
                    </Link>

                    {category.subcategories.length > 0 && (
                      <>
                        <FontAwesomeIcon icon={faChevronRight} size="xs" />
                        <HeaderSubcategoryWrapper>
                          <HeaderCategoriesUL>
                            {category.subcategories.map((subcategory) => (
                              <HeaderCategoriesLI key={subcategory}>
                                <Link to={`/products?category=${subcategory}`}>
                                  {subcategory}
                                </Link>
                              </HeaderCategoriesLI>
                            ))}
                          </HeaderCategoriesUL>
                        </HeaderSubcategoryWrapper>
                      </>
                    )}
                  </HeaderCategoriesLI>
                ))}
              </HeaderCategoriesUL>
            </HeaderBrowseWrapper>
          </HeaderNavItemsWrapper>
        </HeaderNavLI>
      </HeaderNavUL>
    </HeaderNavNav>
  );
};

export default HeaderNav;
