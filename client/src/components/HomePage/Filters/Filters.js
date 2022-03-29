import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { updateSearchOptions } from "../../../actions/productActions";

import {
  StyledFiltersBackground,
  StyledFilterSelectWrapper,
  StyledFiltersWrapper,
} from "./Filters.styles";
import { H3, SpanBold, SpanFilterTag } from "../../../styles/fontStyles";
import { StyledSelect } from "../../../styles/formStyles";
import { Button } from "../../../styles/buttonStyles";

const Filters = () => {
  const dispatch = useDispatch();
  const { count, searchOptions } = useSelector((state) => state.products);

  const hasOptions = Object.keys(searchOptions).length > 0;

  const handleRemoveOptions = (option) => {
    dispatch(updateSearchOptions(option, ""));
  };

  let optionsTags = [];

  if (hasOptions) {
    Object.entries(searchOptions).forEach((item) => {
      const [optionName, optionValue] = item;

      const formattedOptionName = `${optionName
        .slice(0, 1)
        .toUpperCase()}${optionName.slice(1)}`;

      optionsTags.push(
        <SpanFilterTag
          key={optionValue}
          as={Button}
          onClick={() => handleRemoveOptions(optionName)}
        >
          {`${formattedOptionName}: ${optionValue}`}
          <FontAwesomeIcon icon={faTimes} />
        </SpanFilterTag>
      );
    });
  }

  const sortOptions = [
    {
      name: "-amountSold",
      text: "Most Popular",
    },
    {
      name: "createdAt",
      text: "Most Recent",
    },
    {
      name: "price",
      text: "Price - Low to High",
    },
    {
      name: "-price",
      text: "Price - High to Low",
    },
    {
      name: "name",
      text: "Name - Ascending",
    },
    {
      name: "-name",
      text: "Name - Descending",
    },
  ];

  const handleSelectChange = (e) => {
    dispatch(updateSearchOptions("sortBy", e.target.value));
  };

  return (
    <StyledFiltersBackground>
      <H3>
        {count} {count === 1 ? "Result" : "Results"}
      </H3>
      <StyledFiltersWrapper>{hasOptions && optionsTags}</StyledFiltersWrapper>

      <StyledFilterSelectWrapper>
        <SpanBold>Sort By:</SpanBold>
        <StyledSelect onChange={handleSelectChange} value={searchOptions.sortBy}>
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
