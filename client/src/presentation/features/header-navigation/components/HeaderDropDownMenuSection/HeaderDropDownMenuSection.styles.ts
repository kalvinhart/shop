import styled, { css, keyframes } from "styled-components";
import { makeAnimationCSS } from "../../utils/makeAnimationCSS";

const SlideInFromAboveAnimation = keyframes`
0% {
    transform: scaleY(0);
  } 

  100% {
    transform: scaleY(1);
  }
`;

type DropDownWrapperProps = {
  facing: "left" | "right";
};
export const DropDownMenuWrapper = styled.div<DropDownWrapperProps>`
  isolation: isolate;
  z-index: 1;
  position: absolute;
  top: 110%;

  ${(props) => {
    switch (props.facing) {
      case "left":
        return css`
          right: -5px;
        `;
      case "right":
        return css`
          left: -5px;
        `;
    }
  }}

  background-color: #fff;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
  transform-origin: top;

  ${makeAnimationCSS(SlideInFromAboveAnimation)}
`;
