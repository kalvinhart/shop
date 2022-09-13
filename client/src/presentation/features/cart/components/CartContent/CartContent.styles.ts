import styled from "styled-components";
import { mediaSizes } from "../../../../common/styles";

export const CartContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-right: 0;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: var(--borders);

  @media screen and (min-width: ${mediaSizes.xl}) {
    margin-right: 20px;
    width: 1000px;
  }
`;
