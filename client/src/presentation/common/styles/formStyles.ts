import styled from "styled-components";
import mediaSizes from "./media";

import { H2 } from "./fontStyles";

export const StyledFormBackground = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  border: var(--borders);
`;

export const StyledFormWrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.med}) {
    width: 400px;
  }

  & ${H2} {
    margin-bottom: 40px;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledInputGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

export const StyledInputsFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  padding: 10px 20px;
  font-family: inherit;
  border: var(--borders);
  border-radius: var(--border-radius);
`;

export const StyledSelect = styled.select`
  padding: 5px 10px;
  font-family: inherit;
  border: var(--borders);
  border-radius: var(--border-radius);
`;
