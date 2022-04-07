import styled from "styled-components";
import mediaSizes from "../../../styles/media";

import { Button } from "../../../styles/buttonStyles";

export const StyledCheckoutFormWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: calc(70% - 10px);
  }

  & ${Button} {
    margin: 20px 0;
  }
`;
