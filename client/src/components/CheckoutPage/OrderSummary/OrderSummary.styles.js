import styled from "styled-components";

export const StyledOrderSummaryWrapper = styled.div`
  width: calc(30% - 10px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
`;

export const StyledOrderSummaryTotalWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
