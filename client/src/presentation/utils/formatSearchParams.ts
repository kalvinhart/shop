import { ProductData } from "../../infrastructure/services/interfaces/IHttpService";

export const formatSearchParamsForRequest = (searchParams: URLSearchParams) => {
  let params: ProductData = {
    categories: searchParams.get("category") || undefined,
    name: searchParams.get("name") || undefined,
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

export const removeSearchParam = (
  searchParams: URLSearchParams,
  paramToRemove: string
) => {
  const oldParams = formatOldSearchParams(searchParams);
  const newParams = {
    ...oldParams,
  };

  if (searchParams.get(paramToRemove)) {
    delete newParams[paramToRemove];
  }

  return newParams;
};
