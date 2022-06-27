import { Filters } from "../../infrastructure/services/interfaces/IProductService";

export const filtersAreEmpty = (filters: Filters[]): boolean => {
  return (
    filters.length > 0 &&
    filters.length === 1 &&
    (filters[0]._id !== "" || filters[0]._id !== null)
  );
};

export const filterIsEmpty = (filter: Filters): boolean => {
  return filter._id === "" || filter._id === null;
};
