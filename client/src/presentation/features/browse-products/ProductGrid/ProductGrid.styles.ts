import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const GridWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  width: 100%;
  margin-bottom: 20px;
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
