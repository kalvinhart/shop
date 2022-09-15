import styled from "styled-components";
import { StyledButton } from "../../../common/components/Button/Button.styles";
import { mediaSizes, StyledParagraph } from "../../../common/styles";

export const Step1Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & ${StyledParagraph} {
    margin-bottom: 40px;
  }

  & ${StyledButton} {
    width: 200px;
    align-self: center;

    @media screen and (min-width: ${mediaSizes.large}) {
      width: 150px;
      align-self: flex-end;
    }
  }
`;
