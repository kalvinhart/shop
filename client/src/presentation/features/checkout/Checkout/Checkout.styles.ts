import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckoutContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: var(--borders);

  @media screen and (min-width: ${mediaSizes.large}) {
    width: 700px;
  }
`;
