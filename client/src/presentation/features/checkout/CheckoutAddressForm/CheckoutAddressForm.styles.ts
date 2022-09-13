import styled from "styled-components";
import { StyledButton } from "../../../common/components/Button/Button.styles";

export const CheckoutAddressFormWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const CheckoutAddressFormButtonWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  & ${StyledButton} {
    width: 90px;
  }
`;
