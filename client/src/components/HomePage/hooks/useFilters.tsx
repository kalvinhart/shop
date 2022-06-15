import { useProductState } from "../../../hooks/shared/useProductState/useProductState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../../shared/Button/Button";

export const useFilters = () => {
  const { count, searchOptions, updateSearchOptions } = useProductState();

  const hasOptions = Object.keys(searchOptions as object).length > 0;

  const handleRemoveOptions = (option: string) => {
    updateSearchOptions({ option, newOption: "" });
  };

  let optionsTags: JSX.Element[] = [];

  if (hasOptions) {
    Object.entries(searchOptions as object).forEach((item) => {
      const [optionName, optionValue] = item;

      if (optionName === "sortBy") return;

      const formattedOptionName = `${optionName
        .slice(0, 1)
        .toUpperCase()}${optionName.slice(1)}`;

      optionsTags.push(
        <Button
          variant="filter"
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

  const handleSelectChange = (e: React.SyntheticEvent) => {
    updateSearchOptions({ option: "sortBy", newOption: (e.target as HTMLSelectElement).value });
  };

  return {
    count,
    handleSelectChange: (e: React.SyntheticEvent) => handleSelectChange(e),
    hasOptions,
    optionsTags,
    searchOptions,
    sortOptions,
  };
};
