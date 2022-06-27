import styled from "styled-components";
import mediaSizes from "../../../styles/media";

export const StyledContainer = styled.div`
  width: 90%;
  max-width: 1350px;
  margin: 0 auto;

  @media screen and (min-width: ${mediaSizes.xl}) {
    width: 100%;
  }
`;
