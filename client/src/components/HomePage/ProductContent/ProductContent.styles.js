import styled from "styled-components";
import mediaSizes from "../../../styles/media";

export const StyledProductContentWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
  }
`;
