import { useNavigate } from "react-router";
import { useProductState } from "../../../../hooks/useProductState/useProductState";

export const useSearchBar = () => {
  const navigate = useNavigate();
  const {updateSearchOptions} = useProductState();

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();

    if (e.target[0].value) {
      updateSearchOptions({option: "name", newOption: e.target[0].value});
      navigate(`/`);
      e.target[0].value = "";
    }
  };

  return {
    handleSearchSubmit: (e: any) => handleSearchSubmit(e),
  };
};
