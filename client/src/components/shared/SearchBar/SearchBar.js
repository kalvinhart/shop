import { useSearchBar } from "../../../hooks/useSearchBar/useSearchBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { StyledSearchButton, StyledSearchForm } from "./SearchBar.styles";
import { StyledInput } from "../../../styles/formStyles";

const SearchBar = () => {
  const { handleSearchSubmit } = useSearchBar();

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
