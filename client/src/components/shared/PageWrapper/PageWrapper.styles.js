import styled from "styled-components";
import mediaSizes from "../../../styles/media";

export const StyledPageWrapper = styled.div`
  width: 100%;
  margin-top: calc(var(--header-height) + 90px);
  margin-bottom: 60px;

  @media screen and (min-width: ${mediaSizes.large}) {
    margin-top: calc(var(--header-height) + 60px);
  }
`;
