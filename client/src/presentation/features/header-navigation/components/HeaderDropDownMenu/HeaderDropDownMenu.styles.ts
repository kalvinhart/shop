import styled from "styled-components";
import { mediaSizes } from "../../../../common/styles";

export const DropDownLI = styled.li``;

export const DropDownWrapper = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }

  & svg {
    margin-left: 10px;
  }

  &:hover > div {
    transform: scaleY(1);
  }
`;

export const DropDownMenuWrapper = styled.div`
  isolation: isolate;
  z-index: 1;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
  transform: scaleY(0);
  transform-origin: top;
  transition: all 0.1s ease-in-out;
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

  &:hover > div {
    transform: scaleX(1);
  }

  @media screen and (min-width: ${mediaSizes.med}) {
    min-width: 200px;
  }
`;
