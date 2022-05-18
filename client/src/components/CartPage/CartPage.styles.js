import styled from "styled-components";
import mediaSizes from "../../styles/media";

import { Button } from "../../styles/buttonStyles";
import { SpanBold } from "../../styles/fontStyles";

export const StyledCartWrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
`;

export const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    & .mobileHidden {
      display: block;
    }
  }
`;

export const StyledCartSummary = styled.div`
  width: 220px;
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  align-items: baseline;
  align-self: flex-end;

  & ${SpanBold} {
    margin-right: auto;
  }

  & ${Button} {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
`;
