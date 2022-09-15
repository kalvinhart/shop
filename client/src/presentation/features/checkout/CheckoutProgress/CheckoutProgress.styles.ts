import styled, { css } from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const CheckoutProgressWrapper = styled.div`
  padding: 20px;
  margin-bottom: 40px;
`;

export const ProgressNumberWrapper = styled.div`
  display: flex;
`;

type ProgressSpanProps = {
  step: number;
  currentStep: number;
};
export const ProgressSpan = styled.span<ProgressSpanProps>`
  position: relative;
  width: 30px;
  height: 30px;
  background-color: ${(props) =>
    props.currentStep >= props.step ? "var(--clr-primary)" : "#ddd"};
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    ${(props) => {
      switch (props.step) {
        case 1:
          return css`
            content: "Review";
          `;
        case 2:
          return css`
            content: "Delivery";
          `;
        case 3:
          return css`
            content: "Payment";
          `;
        default:
          return "";
      }
    }};
    display: block;
    position: absolute;
    top: 115%;
    left: 50%;
    color: ${(props) =>
      props.currentStep >= props.step ? "var(--clr-primary)" : "#ddd"};
    transform: translateX(-50%);
  }

  &:not(:last-child) {
    margin-right: 80px;
  }

  &:not(:last-child)::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 100%;
    height: 2px;
    width: 80px;
    background-color: ${(props) =>
      props.currentStep > props.step ? "var(--clr-primary)" : "#eee"};
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    &:not(:last-child) {
      margin-right: 200px;
    }

    &:not(:last-child)::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 100%;
      height: 2px;
      width: 200px;
      background-color: ${(props) =>
        props.currentStep > props.step ? "var(--clr-primary)" : "#eee"};
    }
  }
`;
