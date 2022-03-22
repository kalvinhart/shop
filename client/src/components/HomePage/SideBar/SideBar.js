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
    dispatch(updateSearchOptions({ options: { categories: category }, sortBy }));
  };

  return (
    <StyledSideBarBackground>
      <H3>Categories:</H3>
      {loading ? (
        ""
      ) : (
        <StyledNav>
          <StyledNavUL>
            {categories.map((item) => (
              <StyledNavLI>
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
