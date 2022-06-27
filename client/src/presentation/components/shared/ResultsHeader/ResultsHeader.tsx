import { useResultsHeader } from "./hooks/useResultsHeader";

import {
  StyledFiltersBackground,
  StyledFilterSelectWrapper,
  StyledFiltersWrapper,
} from "./ResultsHeader.styles";
import { H3, SpanBold } from "../../../styles/fontStyles";
import { StyledSelect } from "../../../styles/formStyles";

const ResultsHeader = () => {
  const { count, sortOptions, hasOptions, optionsTags, selectValue, handleSelectChange } =
    useResultsHeader();

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

export default ResultsHeader;
