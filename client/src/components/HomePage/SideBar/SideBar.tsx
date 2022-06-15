import { useSideBar } from "../hooks/useSideBar";

import Spinner from "../../shared/Spinner/Spinner";

import { StyledSideBarBackground, StyledUL, StyledLI } from "./SideBar.styles";
import { H3 } from "../../../styles/fontStyles";
import { ButtonCategory } from "../../../styles/buttonStyles";

const SideBar = () => {
  const { categoriesLoading, categories, searchOptions, handleCategoryChange } = useSideBar();

  if (categoriesLoading) return <Spinner />;

  return (
    <>
      {categories && (
        <StyledSideBarBackground>
          <H3>Categories:</H3>

          <StyledUL>
            <StyledLI>
              <ButtonCategory
                onClick={() => handleCategoryChange("")}
                disabled={!searchOptions!.categories}
              >
                All
              </ButtonCategory>
            </StyledLI>
            {categories.map((item) => (
              <StyledLI key={item.name}>
                <ButtonCategory
                  onClick={() => handleCategoryChange(item.name)}
                  disabled={item.name === searchOptions!.categories}
                >
                  {item.name}
                </ButtonCategory>
              </StyledLI>
            ))}
          </StyledUL>
        </StyledSideBarBackground>
      )}
    </>
  );
};

export default SideBar;
