import styled from "styled-components";
import { mediaSizes, SpanBold } from "../../../../common/styles";

export const StyledCartSummary = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  align-self: flex-end;
  background-color: white;
  border: var(--borders);

  & button {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }

  @media screen and (min-width: ${mediaSizes.med}) {
    & button {
      width: 300px;
      align-self: flex-end;
    }
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    width: 400px;
  }

  @media screen and (min-width: ${mediaSizes.xl}) {
    width: 300px;
    align-self: flex-start;

    & button {
      width: 100%;
    }
  }
`;

export const SummarySpanGroup = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
