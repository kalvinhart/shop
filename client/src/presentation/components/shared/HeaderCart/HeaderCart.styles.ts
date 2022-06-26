import styled from "styled-components";
import { SpanBold, SpanPrice } from "../../../styles/fontStyles";

export const StyledHeaderCartPreview = styled.div`
  display: flex;
  flex-direction: column;

  & > div:last-of-type {
    align-self: flex-end;
  }
`;

export const StyledHeaderCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledHeaderCartItemWrapper = styled.div`
  display: flex;
  align-items: center;

  & ${SpanBold} {
    margin-right: 5px;
  }

  & ${SpanPrice} {
    margin-left: auto;
  }
`;

export const StyledHeaderCartImage = styled.img`
  width: 80px;
  margin-right: 5px;
`;

export const StyledHeaderCartButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;
