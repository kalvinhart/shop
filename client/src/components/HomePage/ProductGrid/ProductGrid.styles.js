import styled from "styled-components";
import mediaSizes from "../../../styles/media";

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

  @media screen and (min-width: ${mediaSizes.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
