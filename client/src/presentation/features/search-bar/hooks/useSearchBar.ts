import { useSearchParams } from "react-router-dom";
import { formatOldSearchParams } from "../../../common/utils/formatSearchParams";

export const useSearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();

    const searchTerm = e.target[0].value;

    if (searchTerm) {
      const oldParams = formatOldSearchParams(searchParams);
      const newParams = {
        ...oldParams,
        name: searchTerm,
      };

      setSearchParams(newParams);

      e.target[0].value = "";
    }
  };

  return {
    handleSearchSubmit: (e: any) => handleSearchSubmit(e),
  };
};
