import styled from "styled-components";
import { Button } from "../../../styles/buttonStyles";

export const StyledCheckoutFormWrapper = styled.div`
  width: calc(70% - 10px);
  padding: 20px;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);

  & ${Button} {
    margin-top: 20px;
  }
`;
