import { useSideBar } from "./hooks/useSideBar";

import Spinner from "../Spinner/Spinner";

import { StyledSideBarBackground, StyledUL, StyledLI } from "./SideBar.styles";
import { H3 } from "../../../styles/fontStyles";
import { ButtonCategory } from "../../../styles/buttonStyles";

const SideBar = () => {
  const { categoriesLoading, categories, searchParams, showCategory, showAllCategories } =
    useSideBar();

  if (categoriesLoading) return <Spinner testId="SideBarTest" />;

  return (
    <>
      {categories && (
        <StyledSideBarBackground>
          <H3>Categories:</H3>

          <StyledUL>
            <StyledLI>
              <ButtonCategory
                onClick={showAllCategories}
                disabled={searchParams.get("category") === null}
              >
                All
              </ButtonCategory>
            </StyledLI>
            {categories.map((item) => (
              <StyledLI key={item.name}>
                <ButtonCategory
                  onClick={() => showCategory(item.name)}
                  disabled={searchParams.get("category") === item.name}
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
