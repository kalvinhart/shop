import styled from "styled-components";
import mediaSizes from "../../../styles/media";

import { StyledInput } from "../../../styles/formStyles";

export const StyledSearchForm = styled.form`
  position: relative;
  width: calc(100% - 40px);

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 400px;
  }

  & ${StyledInput} {
    width: 100%;
    height: 40px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const StyledSearchButton = styled.button`
  position: absolute;
  right: -40px;
  top: 0;
  width: 40px;
  height: 40px;
  color: white;
  border: 2px solid transparent;
  background-color: var(--clr-primary);
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--clr-primary-hover);
  }
`;
