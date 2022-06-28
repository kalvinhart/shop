import styled from "styled-components";
import { mediaSizes } from "../../common/styles";

export const StyledCheckoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
