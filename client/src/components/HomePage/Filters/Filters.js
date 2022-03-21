import { H2, SpanBold } from "../../../styles/fontStyles";
import { StyledSelect } from "../../../styles/formStyles";
import { StyledFiltersBackground, StyledFilterSelectWrapper } from "./Filters.styles";

const Filters = ({ category = "All Products" }) => {
  const sortOptions = [
    "Most Popular",
    "Most Recent",
    "Price - Low to High",
    "Price - High to Low",
    "Name - Ascending",
    "Name - Descending",
  ];

  return (
    <StyledFiltersBackground>
      <H2>{category}:</H2>
      <StyledFilterSelectWrapper>
        <SpanBold>Sort By:</SpanBold>
        <StyledSelect>
          {sortOptions.map((option) => (
            <option>{option}</option>
          ))}
        </StyledSelect>
      </StyledFilterSelectWrapper>
    </StyledFiltersBackground>
  );
};

export default Filters;
