import styled from "styled-components";
import mediaSizes from "./media";

import { H2 } from "./fontStyles";

export const FormBackground = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  border: var(--borders);
`;

export const FormWrapper = styled.div`
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

export const Form = styled.form`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

export const InputsFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px 20px;
  font-family: inherit;
  border: var(--borders);
  border-radius: var(--border-radius);

  &::placeholder {
    font-size: 14px;
  }
`;

export const Select = styled.select`
  padding: 5px 10px;
  font-family: inherit;
  border: var(--borders);
  border-radius: var(--border-radius);
`;
