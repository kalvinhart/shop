import styled, { keyframes } from "styled-components";
import { mediaSizes } from "../../../../common/styles";
import { makeAnimationCSS } from "../../utils/makeAnimationCSS";

const FadeInAnimation = keyframes`
  0% {
    opacity: 0;
  } 

  100% {
    opacity: 1;
  }
`;

const SlideInFromAboveAnimation = keyframes`
0% {
    transform: scaleY(0);
  } 

  100% {
    transform: scaleY(1);
  }
`;

export const DropDownLI = styled.li``;

export const DropDownOverlay = styled.div`
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100vw;
  height: calc(100vh - var(--header-height));
  background-color: rgba(0, 0, 0, 0.2);

  ${makeAnimationCSS(FadeInAnimation)}
`;

export const DropDownWrapper = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }

  & svg {
    margin-left: 10px;
  }

  & svg:only-child {
    margin: 0;
  }
`;

export const DropDownMenuWrapper = styled.div`
  isolation: isolate;
  z-index: 1;
  position: absolute;
  top: 110%;
  left: -5px;
  background-color: #fff;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
  transform-origin: top;

  ${makeAnimationCSS(SlideInFromAboveAnimation)}
`;

export const DropDownItemsUL = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-inline-start: 0;
`;

export const DropDownItemsLI = styled.li`
  position: relative;
  min-width: 150px;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  &:hover,
  &:focus-within {
    background-color: #efefef;
  }

  &:hover > div,
  &:focus-within > div {
    display: block;
  }

  @media screen and (min-width: ${mediaSizes.med}) {
    min-width: 200px;
  }
`;
