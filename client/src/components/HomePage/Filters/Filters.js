import { useDispatch, useSelector } from "react-redux";
import { updateSearchOptions } from "../../../actions/productActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
  const {
    count,
    searchOptions: { options, sortBy },
  } = useSelector((state) => state.products);

  const hasOptions = Object.keys(options).length > 0;

  const handleRemoveOptions = (option) => {
    dispatch(updateSearchOptions(option, ""));
  };

  let optionsTags = [];

  if (hasOptions) {
    Object.entries(options).forEach((item) => {
      const [optionName, optionValue] = item;
      console.log(optionName);
      const formattedOptionName = `${optionName
        .slice(0, 1)
        .toUpperCase()}${optionName.slice(1)}`;
      optionsTags.push(
        <SpanFilterTag as={Button} onClick={() => handleRemoveOptions(optionName)}>
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
        <StyledSelect onChange={handleSelectChange} value={sortBy}>
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
