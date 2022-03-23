import { useDispatch, useSelector } from "react-redux";
import { updateSearchOptions } from "../../../actions/productActions";
import Spinner from "../../shared/Spinner/Spinner";

import {
  StyledSideBarBackground,
  StyledNav,
  StyledNavUL,
  StyledNavLI,
} from "./SideBar.styles";
import { Button } from "../../../styles/buttonStyles";
import { H3 } from "../../../styles/fontStyles";

const SideBar = ({ loading, categories }) => {
  const dispatch = useDispatch();
  const {
    searchOptions: { options },
  } = useSelector((state) => state.products);

  const handleCategoryChange = (category) => {
    dispatch(updateSearchOptions("categories", category));
  };

  return (
    <StyledSideBarBackground>
      <H3>Categories:</H3>
      {loading ? (
        <Spinner />
      ) : (
        <StyledNav>
          <StyledNavUL>
            <StyledNavLI>
              <Button
                onClick={() => handleCategoryChange("")}
                disabled={!options.categories}
              >
                All Products
              </Button>
            </StyledNavLI>
            {categories.map((item) => (
              <StyledNavLI key={item.name}>
                <Button
                  onClick={() => handleCategoryChange(item.name)}
                  disabled={item.name === options.categories}
                >
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
