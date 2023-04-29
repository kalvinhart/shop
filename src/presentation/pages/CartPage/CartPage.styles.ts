import styled from "styled-components";
import { mediaSizes } from "../../common/styles";

export const CartWrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${mediaSizes.xl}) {
    flex-direction: row;
  }
`;
