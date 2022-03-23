import styled from "styled-components";
import { SpanBold } from "../../../styles/fontStyles";

export const StyledFiltersBackground = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: var(--borders);
  margin-bottom: 20px;
`;

export const StyledFilterSelectWrapper = styled.div`
  & ${SpanBold} {
    margin-right: 10px;
  }
`;
