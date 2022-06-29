import styled from "styled-components";

import { mediaSizes } from "../../../../common/styles";

export const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    & .mobileHidden {
      display: block;
    }
  }
`;
