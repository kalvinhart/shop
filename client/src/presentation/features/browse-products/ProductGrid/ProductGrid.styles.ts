import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const StyledGridWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media screen and (min-width: ${mediaSizes.med}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${mediaSizes.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
