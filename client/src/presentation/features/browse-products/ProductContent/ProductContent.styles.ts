import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const ProductContentWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
  }
`;

export const ProductResultsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
