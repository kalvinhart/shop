import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateSearchOptions } from "../../../actions/productActions";
import { Button } from "../../../styles/buttonStyles";
import { H3 } from "../../../styles/fontStyles";
import {
  StyledSideBarBackground,
  StyledNav,
  StyledNavUL,
  StyledNavLI,
} from "./SideBar.styles";

const SideBar = ({ loading, categories }) => {
  const dispatch = useDispatch();
  const { searchOptions } = useSelector((state) => state.products);
  const { options, sortBy } = searchOptions;

  const handleCategoryChange = (category) => {
    let newOptions = {};

    if (category) {
      newOptions = {
        options: {
          ...options,
          categories: category,
        },
        sortBy,
      };
    } else {
      newOptions = { options: { ...options }, sortBy };
      if (newOptions.options.hasOwnProperty("categories")) {
        delete newOptions.options.categories;
      }
    }

    dispatch(updateSearchOptions(newOptions));
  };

  return (
    <StyledSideBarBackground>
      <H3>Categories:</H3>
      {loading ? (
        ""
      ) : (
        <StyledNav>
          <StyledNavUL>
            <StyledNavLI>
              <Button onClick={() => handleCategoryChange("")}>All Products</Button>
            </StyledNavLI>
            {categories.map((item) => (
              <StyledNavLI key={item.name}>
                <Button onClick={() => handleCategoryChange(item.name)}>
                  {item.name}
                </Button>
              </StyledNavLI>
            ))}
          </StyledNavUL>
        </StyledNav>
      )}
    </StyledSideBarBackground>
  );
};

export default SideBar;
