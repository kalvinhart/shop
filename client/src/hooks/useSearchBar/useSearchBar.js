import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateSearchOptions } from "../../slices/productSlice";

export const useSearchBar = () => {
  const dispatch = useDispatch();
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
