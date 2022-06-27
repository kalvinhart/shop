import { useSearchParams } from "react-router-dom";

import { useProductState } from "../../../../hooks/useProductState/useProductState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button/Button";

import {
  formatOldSearchParams,
  removeSearchParam,
} from "../../../../utils/formatSearchParams";

export const useResultsHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { count } = useProductState();

  const hasOptions = Array.from(searchParams.keys()).length > 0;

  let optionsTags: JSX.Element[] = [];

  const handleRemoveParam = (searchParams: URLSearchParams, param: string): void => {
    const newParams = removeSearchParam(searchParams, param);
    setSearchParams(newParams);
  };

  if (hasOptions) {
    Array.from(searchParams.entries()).forEach((item) => {
      const [optionName, optionValue] = item;

      if (optionName === "sort") return;

      const formattedOptionName = `${optionName
        .slice(0, 1)
        .toUpperCase()}${optionName.slice(1)}`;

      optionsTags.push(
        <Button
          variant="filter"
          key={optionValue}
          onClick={() => handleRemoveParam(searchParams, optionName)}
        >
          {`${formattedOptionName}: "${optionValue}"`}
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

  const selectValue =
    searchParams.get("sort") === null ? "-amountSold" : searchParams.get("sort");

  const handleSelectChange = (e: React.SyntheticEvent) => {
    const oldParams = formatOldSearchParams(searchParams);
    const newParams = {
      ...oldParams,
      sort: (e.target as HTMLSelectElement).value,
    };
    setSearchParams(newParams);
  };

  return {
    count,
    selectValue,
    handleSelectChange: (e: React.SyntheticEvent) => handleSelectChange(e),
    hasOptions,
    optionsTags,
    searchParams,
    sortOptions,
  };
};
