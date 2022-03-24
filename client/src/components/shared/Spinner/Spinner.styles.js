import styled, { css, keyframes } from "styled-components";

const Spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const StyledSpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSpinner = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  border: 5px solid #ccc;
  border-top: 5px solid #333;
  border-radius: 50%;
  animation: ${Spin} 1s infinite;
`;
