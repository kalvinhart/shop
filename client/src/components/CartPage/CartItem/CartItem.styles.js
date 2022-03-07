import styled from "styled-components";
import { SpanGrey } from "../../../styles/fontStyles";

export const StyledCartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StyledCartItemImage = styled.img`
  height: 150px;
  border-radius: var(--border-radius);
  margin-right: 30px;
`;

export const StyledCartItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCartItemInfoGroup = styled.div`
  display: flex;

  & ${SpanGrey} {
    margin-right: 10px;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StyledCartButtonsWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
