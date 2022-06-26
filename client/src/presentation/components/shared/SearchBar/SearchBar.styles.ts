import styled from "styled-components";
import mediaSizes from "../../../styles/media";

import { StyledInput } from "../../../styles/formStyles";

export const StyledSearchForm = styled.form`
  position: relative;
  width: 150px;

  & ${StyledInput} {
    width: 100%;
    padding: 8px 10px;
    font-size: 12px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  @media screen and (min-width: ${mediaSizes.med}) {
    width: 400px;

    & ${StyledInput} {
      height: 40px;
      padding: 10px 20px;
      font-size: 16px;
    }
  }
`;

export const StyledSearchButton = styled.button`
  position: absolute;
  right: -40px;
  top: 0;
  width: 40px;
  height: 32px;
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

  @media screen and (min-width: ${mediaSizes.med}) {
    height: 40px;
  }
`;
