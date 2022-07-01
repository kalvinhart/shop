import { SelectedFilters } from "../../features/filters/slice/filtersSlice";

export const formatOldSearchParams = (oldSearchParams: URLSearchParams) => {
  return Object.fromEntries([...oldSearchParams]);
};

export const handleSearchParamsOnFilterChange = (
  searchParams: URLSearchParams,
  selectedFilters: SelectedFilters
) => {
  const currentParams = formatOldSearchParams(searchParams);

  const newParams = {
    ...currentParams,
    ...selectedFilters,
  };

  ["brand", "color", "size"].forEach((filter) => {
    if (newParams[filter as keyof SelectedFilters] === "")
      delete newParams[filter as keyof SelectedFilters];
  });

  return newParams;
};
