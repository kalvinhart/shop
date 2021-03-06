import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const StyledCheckoutFormWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);

  @media screen and (min-width: ${mediaSizes.large}) {
    width: calc(70% - 10px);
  }

  & button {
    margin: 20px 0;
  }
`;
