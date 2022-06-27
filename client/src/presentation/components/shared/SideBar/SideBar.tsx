import { useEffect } from "react";
import { useProductState } from "../../../hooks/useProductState/useProductState";
import { H3, SpanBold, SpanRegular } from "../../../styles/fontStyles";
import Checkbox from "../Checkbox/Checkbox";
import { StyledSideBarBackground } from "./SideBar.styles";

const SideBar = () => {
  const { filters, loadFilters } = useProductState();

  useEffect(() => {
    if (filters === null) {
      loadFilters();
    }
  }, [filters, loadFilters]);

  return (
    <>
      <StyledSideBarBackground>
        <H3>Filters:</H3>
        {filters && filters.allBrands.length > 0 && (
          <>
            <SpanBold>Brand:</SpanBold>
            {filters.allBrands.map((brand) => (
              <Checkbox label={brand._id} onChange={() => {}} />
            ))}
          </>
        )}

        {filters && filters.allColors.length > 0 && (
          <>
            <SpanBold>Color:</SpanBold>
            {filters.allColors.map((color) => {
              if (color._id !== null) {
                return <Checkbox label={color._id} onChange={() => {}} />;
              }
              return null;
            })}
          </>
        )}

        {filters && filters.allSizes.length > 0 && (
          <>
            <SpanBold>Size:</SpanBold>
            {filters.allSizes.map((size) => {
              if (size._id !== null) {
                return <Checkbox label={size._id} onChange={() => {}} />;
              }
              return null;
            })}
          </>
        )}
      </StyledSideBarBackground>
    </>
  );
};

export default SideBar;
