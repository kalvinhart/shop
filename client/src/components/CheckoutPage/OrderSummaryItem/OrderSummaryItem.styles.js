import styled from "styled-components";
import { SpanBold, SpanPrice, SpanRegular } from "../../../styles/fontStyles";

export const StyledOrderSummaryItemWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    border-bottom: var(--borders);
  }

  & ${SpanBold}, & ${SpanRegular} {
    margin-bottom: 5px;
  }

  & ${SpanPrice} {
    position: absolute;
    bottom: 20px;
    right: 0;
    align-self: flex-end;
    font-size: 20px;
  }
`;
