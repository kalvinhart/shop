import { useResultsHeader } from "./hooks/useResultsHeader";

import {
  CurrentFiltersWrapper,
  FilterTagsWrapper,
  HeadingWrapper,
  ShowFiltersButton,
  StyledFiltersBackground,
  StyledFilterSelectWrapper,
} from "./ResultsHeader.styles";
import { H3, SpanBold } from "../../../styles/fontStyles";
import { StyledSelect } from "../../../styles/formStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

type ResultsHeaderProps = {
  setShow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const ResultsHeader = ({ setShow }: ResultsHeaderProps) => {
  const { count, sortOptions, hasOptions, optionsTags, selectValue, handleSelectChange } =
    useResultsHeader();

  return (
    <>
      <StyledFiltersBackground>
        <HeadingWrapper>
          <H3>
            {count} {count === 1 ? "Result" : "Results"}
          </H3>

          <ShowFiltersButton onClick={() => setShow(true)}>
            <FontAwesomeIcon icon={faFilter} />
            Filters
          </ShowFiltersButton>
        </HeadingWrapper>

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

      {hasOptions && (
        <CurrentFiltersWrapper>
          <FilterTagsWrapper>{optionsTags}</FilterTagsWrapper>
        </CurrentFiltersWrapper>
      )}
    </>
  );
};

export default ResultsHeader;
