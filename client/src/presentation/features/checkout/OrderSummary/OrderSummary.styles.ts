import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const StyledOrderSummaryWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);

  @media screen and (min-width: ${mediaSizes.large}) {
    width: calc(30% - 10px);
    margin-bottom: 0;
  }
`;

export const StyledOrderSummaryTotalWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
