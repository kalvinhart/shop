import { useSearchParams } from "react-router-dom";

import { useProductState } from "../../../common/hooks/useProductState";

import { formatOldSearchParams } from "../../../common/utils/formatSearchParams";
import { formatStringToUpper } from "../../../common/utils/formatStringToUpper";

import { FilterTags } from "../ResultsHeader/ResultsHeader.styles";

export const useResultsHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { count } = useProductState();

  let optionsTags: JSX.Element[] = [];

  const optionIsSort =
    Array.from(searchParams.keys()).length === 1 && searchParams.get("sort") !== "";

  const hasOptions = Array.from(searchParams.keys()).length > 0 && !optionIsSort;

  if (hasOptions) {
    Array.from(searchParams.entries()).forEach((item) => {
      const [optionName, optionValue] = item;

      if (optionName === "sort") return;

      const formattedOptionName = formatStringToUpper(optionName);
      const formattedOptionValue = formatStringToUpper(optionValue);

      optionsTags.push(
        <FilterTags key={optionValue}>
          {`${formattedOptionName}: "${formattedOptionValue}"`}
        </FilterTags>
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