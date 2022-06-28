import { SelectedFilters } from "../../application/slices/productSlice";
import { ProductData } from "../../infrastructure/services/interfaces/IHttpService";

export const formatSearchParamsForRequest = (searchParams: URLSearchParams) => {
  let params: ProductData = {
    categories: searchParams.get("category") || undefined,
    name: searchParams.get("name") || undefined,
    brand: searchParams.get("brand") || undefined,
    color: searchParams.get("color") || undefined,
    size: searchParams.get("size") || undefined,
  };

  let options: ProductData = {};

  Object.keys(params).forEach((option) => {
    if (!option) return;

    options[option as keyof ProductData] = params[option as keyof ProductData];
  });

  const sort = searchParams.get("sort") || "";

  const filterOptions = {
    options,
    sortBy: sort,
  };

  return filterOptions;
};

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
