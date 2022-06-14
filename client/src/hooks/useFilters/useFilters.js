import { useAppSelector } from "../../application/hooks/useAppSelector";
import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { updateSearchOptions } from "../../application/slices/productSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../styles/buttonStyles";

export const useFilters = () => {
  const dispatch = useAppDispatch();
  const { count, searchOptions } = useAppSelector((state) => state.products);

  const hasOptions = Object.keys(searchOptions).length > 0;

  const handleRemoveOptions = (option) => {
    dispatch(updateSearchOptions({ option, newOption: "" }));
  };

  let optionsTags = [];

  if (hasOptions) {
    Object.entries(searchOptions).forEach((item) => {
      const [optionName, optionValue] = item;

      if (optionName === "sortBy") return;

      const formattedOptionName = `${optionName
        .slice(0, 1)
        .toUpperCase()}${optionName.slice(1)}`;

      optionsTags.push(
        <Button
          type="filter"
          key={optionValue}
          onClick={() => handleRemoveOptions(optionName)}
        >
          {`${formattedOptionName}: ${optionValue}`}
          <FontAwesomeIcon icon={faTimes} />
        </Button>
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
    dispatch(updateSearchOptions({ option: "sortBy", newOption: e.target.value }));
  };

  return {
    count,
    handleSelectChange: (e) => handleSelectChange(e),
    hasOptions,
    optionsTags,
    searchOptions,
    sortOptions,
  };
};
