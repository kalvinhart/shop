import styled from "styled-components";
import { H2, mediaSizes } from "../../../common/styles";

export const Step3Wrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  & ${H2} {
    margin-bottom: 40px;
  }
`;

export const PaymentWrapper = styled.div`
  width: 100%;
  align-self: center;

  @media screen and (min-width: ${mediaSizes.med}) {
    width: 400px;
  }
`;

export const PaymentOverviewWrapper = styled.div`
  padding: 20px;
  margin-top: 40px;
  background-color: #f6f6f6;
`;

export const PaymentOverviewGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Step3ButtonGroup = styled.div`
  margin-bottom: 20px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & button:first-child {
    margin-bottom: 20px;
  }
`;
