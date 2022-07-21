import { useResultsHeader } from "../hooks/useResultsHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import {
  CurrentFiltersWrapper,
  FilterTagsWrapper,
  HeadingWrapper,
  ShowFiltersButton,
  FiltersBackground,
  FilterSelectWrapper,
} from "./ResultsHeader.styles";
import { H3, SpanBold } from "../../../common/styles";
import { StyledSelect } from "../../../common/styles";

type ResultsHeaderProps = {
  setShow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const ResultsHeader = ({ setShow }: ResultsHeaderProps) => {
  const { count, sortOptions, hasOptions, optionsTags, selectValue, handleSelectChange } =
    useResultsHeader();

  return (
    <>
      <FiltersBackground>
        <HeadingWrapper>
          <H3>
            {count} {count === 1 ? "Result" : "Results"}
          </H3>

          <ShowFiltersButton onClick={() => setShow(true)}>
            <FontAwesomeIcon icon={faFilter} />
            Filters
          </ShowFiltersButton>
        </HeadingWrapper>

        <FilterSelectWrapper>
          <SpanBold>Sort By:</SpanBold>
          <StyledSelect onChange={handleSelectChange} value={selectValue!}>
            {sortOptions.map((option) => (
              <option key={option.text} value={option.name}>
                {option.text}
              </option>
            ))}
          </StyledSelect>
        </FilterSelectWrapper>
      </FiltersBackground>

      {hasOptions && (
        <CurrentFiltersWrapper>
          <FilterTagsWrapper>{optionsTags}</FilterTagsWrapper>
        </CurrentFiltersWrapper>
      )}
    </>
  );
};

export default ResultsHeader;
