import { Link } from "react-router-dom";

import { Product } from "../../../../domain/models/Product";

import { SpanBold, SpanRegular } from "../../../common/styles";
import {
  ListItem,
  SuggestionsItem,
  SuggestionsList,
  SuggestionsWrapper,
} from "./SearchSuggestions.styles";

type SearchSuggestionsProps = {
  suggestions: Product[] | null;
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
          <ListItem>
            <SpanBold>Loading...</SpanBold>
          </ListItem>
        ) : suggestions && suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
            <SuggestionsItem key={suggestion._id}>
              <Link to={`/product/${suggestion._id}`} onClick={handleLinkClick}>
                {suggestion.name}
              </Link>
            </SuggestionsItem>
          ))
        ) : suggestions ? (
          <SuggestionsItem>
            <SpanBold>No items found</SpanBold>
          </SuggestionsItem>
        ) : (
          <ListItem>
            <SpanRegular>Start typing to search for an item.</SpanRegular>
          </ListItem>
        )}
      </SuggestionsList>
    </SuggestionsWrapper>
  );
};
export default SearchSuggestions;
