import styled from "styled-components";
import { H3 } from "../../../common/styles";

export const Step3Wrapper = styled.div`
  width: 400px;
  margin-top: 40px;

  & ${H3} {
    margin-bottom: 40px;
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
  justify-content: space-between;
  align-items: center;
`;
