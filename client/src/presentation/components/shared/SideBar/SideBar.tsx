import { useEffect } from "react";
import { useProductState } from "../../../hooks/useProductState/useProductState";
import { H3, SpanBold, SpanRegular } from "../../../styles/fontStyles";
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
              <SpanRegular>{brand._id}</SpanRegular>
            ))}
          </>
        )}

        {filters && filters.allColors.length > 0 && (
          <>
            <SpanBold>Color:</SpanBold>
            {filters.allColors.map((color) => (
              <SpanRegular>{color._id}</SpanRegular>
            ))}
          </>
        )}

        {filters && filters.allSizes.length > 0 && (
          <>
            <SpanBold>Size:</SpanBold>
            {filters.allSizes.map((size) => (
              <SpanRegular>{size._id}</SpanRegular>
            ))}
          </>
        )}
      </StyledSideBarBackground>
    </>
  );
};

export default SideBar;
