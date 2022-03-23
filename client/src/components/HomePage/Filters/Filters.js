import { useDispatch, useSelector } from "react-redux";
import { updateSearchOptions } from "../../../actions/productActions";

import { H2, SpanBold } from "../../../styles/fontStyles";
import { StyledSelect } from "../../../styles/formStyles";
import { StyledFiltersBackground, StyledFilterSelectWrapper } from "./Filters.styles";

const Filters = () => {
  const dispatch = useDispatch();
  const { searchOptions } = useSelector((state) => state.products);
  const { options, sortBy } = searchOptions;

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
      <H2>{options.categories ?? "All Products"}:</H2>
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
