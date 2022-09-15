import { useSearchBar } from "../hooks/useSearchBar";
import { useClickOutside } from "../../../common/hooks/useClickOutside/useClickOutside";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { SearchSuggestions } from "../SearchSuggestions";

import { StyledSearchButton, StyledSearchForm } from "./SearchBar.styles";
import { Input } from "../../../common/styles";

const SearchBar = () => {
  const {
    loading,
    searchTerm,
    suggestions,
    showSuggestions,
    searchBarRef,
    setShowSuggestions,
    handleInputChange,
    handleSearchSubmit,
    handleLinkClick,
  } = useSearchBar();

  useClickOutside(searchBarRef, () => setShowSuggestions(false));

  return (
    <StyledSearchForm onSubmit={handleSearchSubmit} ref={searchBarRef} autoComplete="off">
      <Input
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
        placeholder="Search"
        autoComplete="off"
      />
      <StyledSearchButton aria-label="Search">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </StyledSearchButton>

      {showSuggestions && (
        <SearchSuggestions
          suggestions={suggestions}
          loading={loading}
          handleLinkClick={handleLinkClick}
        />
      )}
    </StyledSearchForm>
  );
};

export default SearchBar;
