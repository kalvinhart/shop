import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useCategoryState } from "../../../hooks/useCategoryState/useCategoryState";

import Spinner from "../Spinner/Spinner";

import {
  StyledSideBarBackground,
  StyledUL,
  StyledLI,
  StyledSubcategoryUL,
  StyledCategoryHeadingLI,
} from "./SideBar.styles";
import { H3 } from "../../../styles/fontStyles";

const SideBar = () => {
  const { categoriesLoading, categories, loadCategories } = useCategoryState();

  useEffect(() => {
    if (categories.length > 0) return;

    loadCategories();
  }, [categories, loadCategories]);

  if (categoriesLoading) return <Spinner testId="SideBarTest" />;

  return (
    <>
      {categories && (
        <StyledSideBarBackground>
          <H3>Categories:</H3>

          <StyledUL>
            <StyledCategoryHeadingLI>
              <Link to="/products">All</Link>
            </StyledCategoryHeadingLI>

            {categories.map((item) => (
              <StyledCategoryHeadingLI key={item.name}>
                <Link to={`/products?category=${item.name}`}>{item.name}</Link>

                <StyledSubcategoryUL>
                  {item.subcategories.map((sub) => (
                    <StyledLI key={sub}>
                      <Link to={`/products?category=${sub}`}>{sub}</Link>
                    </StyledLI>
                  ))}
                </StyledSubcategoryUL>
              </StyledCategoryHeadingLI>
            ))}
          </StyledUL>
        </StyledSideBarBackground>
      )}
    </>
  );
};

export default SideBar;
