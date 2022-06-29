import styled from "styled-components";
import { SpanBold } from "../../../../common/styles";

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

  & button {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
`;
