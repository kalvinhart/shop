import { Link } from "react-router-dom";

import { useSearchBar } from "../hooks/useSearchBar";

import { Product } from "../../../../domain/models/Product";

import { SpanBold } from "../../../common/styles";
import {
  SuggestionsItem,
  SuggestionsList,
  SuggestionsWrapper,
} from "./SearchSuggestions.styles";

type SearchSuggestionsProps = {
  suggestions: Product[];
  loading: boolean;
  handleLinkClick: () => void;
};

const SearchSuggestions = ({
  suggestions,
  loading,
  handleLinkClick,
}: SearchSuggestionsProps) => {
  return (
    <SuggestionsWrapper>
      <SuggestionsList>
        {loading ? (
          <SuggestionsItem>
            <SpanBold>Loading...</SpanBold>
          </SuggestionsItem>
        ) : suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
            <SuggestionsItem key={suggestion._id}>
              <Link to={`/product/${suggestion._id}`} onClick={handleLinkClick}>
                {suggestion.name}
              </Link>
            </SuggestionsItem>
          ))
        ) : (
          <SuggestionsItem>
            <SpanBold>No items found</SpanBold>
          </SuggestionsItem>
        )}
      </SuggestionsList>
    </SuggestionsWrapper>
  );
};
export default SearchSuggestions;
