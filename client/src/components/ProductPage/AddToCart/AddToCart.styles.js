import styled from "styled-components";
import { FlexCol, FlexSpaceBetween } from "../../../styles/flexStyles";

export const StyledAddToCartWrapper = styled.div`
  width: 100%;
  ${FlexCol}
`;

export const StyledQuantityTotalWrapper = styled.div`
  margin-bottom: 40px;
  ${FlexSpaceBetween}
`;

export const StyledQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledQuantityButtonsWrapper = styled.div`
  width: 100px;
  ${FlexSpaceBetween}
  align-items: center;
`;

export const StyledTotalWrapper = styled.div`
  ${FlexCol}
`;

export const StyledPurchaseButtonsWrapper = styled.div`
  ${FlexSpaceBetween}
`;
