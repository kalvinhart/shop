import { css, Keyframes } from "styled-components";

export const makeAnimationCSS = (animationName: Keyframes) => css`
  animation-name: ${animationName};
  animation-fill-mode: forwards;
  animation-duration: 0.2s;
`;
