import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const StyledOrderSummaryWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: white;
  border: var(--borders);

  @media screen and (min-width: ${mediaSizes.large}) {
    width: 80%;
    max-width: 450px;
  }
`;

export const StyledOrderSummaryTotalWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
