import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchOptions } from "../../../actions/productActions";
import { loadCategories } from "../../../actions/categoryActions";

import Spinner from "../../shared/Spinner/Spinner";

import {
  StyledSideBarBackground,
  StyledNav,
  StyledNavUL,
  StyledNavLI,
} from "./SideBar.styles";
import { H3 } from "../../../styles/fontStyles";
import { ButtonCategory } from "../../../styles/buttonStyles";

const SideBar = () => {
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

  if (loading) return <Spinner />;

  return (
    <StyledSideBarBackground>
      {categories && (
        <>
          <H3>Categories:</H3>
          <StyledNav>
            <StyledNavUL>
              <StyledNavLI>
                <ButtonCategory
                  onClick={() => handleCategoryChange("")}
                  disabled={!searchOptions.categories}
                >
                  All Products
                </ButtonCategory>
              </StyledNavLI>
              {categories.map((item) => (
                <StyledNavLI key={item.name}>
                  <ButtonCategory
                    onClick={() => handleCategoryChange(item.name)}
                    disabled={item.name === searchOptions.categories}
                  >
                    {item.name}
                  </ButtonCategory>
                </StyledNavLI>
              ))}
            </StyledNavUL>
          </StyledNav>
        </>
      )}
    </StyledSideBarBackground>
  );
};

export default SideBar;
