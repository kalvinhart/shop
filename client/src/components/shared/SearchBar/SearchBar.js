import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { StyledSearchButton, StyledSearchForm } from "./SearchBar.styles";
import { StyledInput } from "../../../styles/formStyles";

import { updateSearchOptions } from "../../../actions/productActions";

const SearchBar = () => {
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

  return (
    <StyledSearchForm onSubmit={handleSearchSubmit}>
      <StyledInput type="text" name="search" id="search" placeholder="Search" />
      <StyledSearchButton aria-label="Search">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </StyledSearchButton>
    </StyledSearchForm>
  );
};

export default SearchBar;
