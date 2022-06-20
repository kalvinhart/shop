import { useFilters } from "./hooks/useFilters";

import {
  StyledFiltersBackground,
  StyledFilterSelectWrapper,
  StyledFiltersWrapper,
} from "./Filters.styles";
import { H3, SpanBold } from "../../../styles/fontStyles";
import { StyledSelect } from "../../../styles/formStyles";

const Filters = () => {
  const { count, sortOptions, hasOptions, optionsTags, selectValue, handleSelectChange } =
    useFilters();

  return (
    <StyledFiltersBackground>
      <H3>
        {count} {count === 1 ? "Result" : "Results"}
      </H3>
      {hasOptions && <StyledFiltersWrapper>{optionsTags}</StyledFiltersWrapper>}

      <StyledFilterSelectWrapper>
        <SpanBold>Sort By:</SpanBold>
        <StyledSelect onChange={handleSelectChange} value={selectValue!}>
          {sortOptions.map((option) => (
            <option key={option.text} value={option.name}>
              {option.text}
            </option>
          ))}
        </StyledSelect>
      </StyledFilterSelectWrapper>
    </StyledFiltersBackground>
  );
};

export default Filters;
