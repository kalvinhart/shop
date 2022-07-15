import styled, { keyframes } from "styled-components";
import { makeAnimationCSS } from "../../utils/makeAnimationCSS";

const SlideInFromLeftAnimation = keyframes`
0% {
    transform: scaleX(0);
  } 

  100% {
    transform: scaleX(1);
  }
`;

export const DropDownSubcategoryWrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  right: -100%;
  background-color: #fff;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
  display: none;
  transform-origin: left;

  ${makeAnimationCSS(SlideInFromLeftAnimation)}
`;
