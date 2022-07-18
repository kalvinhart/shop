import { SelectedFilters } from "../../features/filters/slice/filtersSlice";

type Params = {
  page?: string;
  brand?: string;
  color?: string;
  size?: string;
  pageSize?: string;
};

export const formatOldSearchParams = (oldSearchParams: URLSearchParams) => {
  return Object.fromEntries([...oldSearchParams]);
};

export const handleSearchParamsOnFilterChange = (
  searchParams: URLSearchParams,
  selectedFilters: SelectedFilters
) => {
  const currentParams: Params = formatOldSearchParams(searchParams);

  const newParams = {
    ...currentParams,
    ...selectedFilters,
  };

  ["brand", "color", "size"].forEach((filter) => {
    if (newParams[filter as keyof SelectedFilters] === "")
      delete newParams[filter as keyof SelectedFilters];
  });

  if (newParams.page) delete newParams.page;

  return newParams;
};
