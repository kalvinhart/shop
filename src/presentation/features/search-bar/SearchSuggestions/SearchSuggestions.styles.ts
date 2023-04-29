import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const SuggestionsWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: -90px;
  width: 300px;
  background-color: white;
  border: var(--borders);
  border-top: none;
  box-shadow: var(--box-shadow);

  @media screen and (min-width: ${mediaSizes.med}) {
    width: 100%;
    left: 0;
  }
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-inline-start: 0;
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 10px;
  font-size: 14px;

  & span {
    font-size: 12px;
  }
`;

export const SuggestionsItem = styled(ListItem)`
  &:hover,
  &:focus-within {
    background-color: #efefef;
  }
`;
