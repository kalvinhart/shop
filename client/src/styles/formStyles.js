import styled from "styled-components";
import { H2 } from "./fontStyles";

export const StyledFormBackground = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  border: 2px solid var(--clr-borders);
`;

export const StyledFormWrapper = styled.div`
  width: 400px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

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

  &:last-of-type {
    margin-bottom: 50px;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  padding: 5px 10px;
  font-family: inherit;
  border: 2px solid var(--clr-borders);
  border-radius: var(--border-radius);
`;
