import styled from "styled-components";
import { StyledParagraph } from "../../styles/fontStyles";

export const StyledConfirmationBackground = styled.div`
  padding: 20px;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);

  & ${StyledParagraph} {
    margin-bottom: 40px;
  }
`;
