import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.med}) {
    flex-direction: row;
  }
`;

export const PaginationResultsWrapper = styled.div``;
