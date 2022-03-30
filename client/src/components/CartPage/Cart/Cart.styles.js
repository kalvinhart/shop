import styled from "styled-components";
import { Button } from "../../../styles/buttonStyles";
import { SpanBold } from "../../../styles/fontStyles";

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
`;

export const StyledCartSummary = styled.div`
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  align-self: flex-end;

  & ${SpanBold} {
    margin-right: auto;
  }

  & ${Button} {
    margin-top: 10px;
  }
`;
