import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useCategoryState } from "../../../hooks/useCategoryState/useCategoryState";

import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  StyledHeaderBrowseWrapper,
  StyledHeaderCategoriesLI,
  StyledHeaderCategoriesUL,
  StyledHeaderNav,
  StyledHeaderNavItem,
  StyledHeaderNavItemsWrapper,
  StyledHeaderNavLI,
  StyledHeaderNavOverlay,
  StyledHeaderNavUL,
  StyledHeaderSubcategoryWrapper,
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
    <StyledHeaderNav>
      <StyledHeaderNavUL>
        <StyledHeaderNavLI>
          <StyledHeaderNavItemsWrapper>
            <StyledHeaderNavItem>
              Browse
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </StyledHeaderNavItem>

            <StyledHeaderBrowseWrapper>
              <StyledHeaderCategoriesUL>
                {categories.map((category) => (
                  <StyledHeaderCategoriesLI>
                    <Link to={`/products?category=${category.name}`}>
                      {category.name}
                    </Link>

                    {category.subcategories.length > 0 && (
                      <>
                        <FontAwesomeIcon icon={faChevronRight} size="xs" />
                        <StyledHeaderSubcategoryWrapper>
                          <StyledHeaderCategoriesUL>
                            {category.subcategories.map((subcategory) => (
                              <StyledHeaderCategoriesLI>
                                <Link to={`/products?category=${subcategory}`}>
                                  {subcategory}
                                </Link>
                              </StyledHeaderCategoriesLI>
                            ))}
                          </StyledHeaderCategoriesUL>
                        </StyledHeaderSubcategoryWrapper>
                      </>
                    )}
                  </StyledHeaderCategoriesLI>
                ))}
              </StyledHeaderCategoriesUL>
            </StyledHeaderBrowseWrapper>
          </StyledHeaderNavItemsWrapper>
          <StyledHeaderNavOverlay data-name="overlay" />
        </StyledHeaderNavLI>
      </StyledHeaderNavUL>
    </StyledHeaderNav>
  );
};

export default HeaderNav;
