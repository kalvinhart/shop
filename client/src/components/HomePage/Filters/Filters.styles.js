import styled from "styled-components";
import { H3, SpanBold } from "../../../styles/fontStyles";

export const StyledFiltersBackground = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
  margin-bottom: 20px;

  & ${H3} {
    margin-right: 10px;
  }
`;

export const StyledFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const StyledFilterSelectWrapper = styled.div`
  & ${SpanBold} {
    margin-right: 10px;
  }
`;
