import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const StyledAddToCartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledQuantityTotalWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

export const StyledQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledQuantityButtonsWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTotalWrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
`;

export const StyledPurchaseButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
