import { useNavigate } from "react-router";
import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { updateSearchOptions } from "../../application/slices/productSlice";

export const useSearchBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value) {
      dispatch(updateSearchOptions("name", e.target[0].value));
      navigate(`/`);
      e.target[0].value = "";
    }
  };

  return {
    handleSearchSubmit: (e) => handleSearchSubmit(e),
  };
};
