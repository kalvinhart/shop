import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const HeaderNavNav = styled.nav`
  font-size: 14px;

  @media screen and (min-width: ${mediaSizes.med}) {
    font-size: 16px;
  }
`;

export const HeaderNavUL = styled.ul`
  display: flex;
  list-style: none;
  padding-inline-start: 0;
`;

export const HeaderNavLI = styled.li``;

export const HeaderNavItemsWrapper = styled.div`
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

export const HeaderNavItem = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 80%;
    left: 50%;
    width: 100%;
    height: 2px;
    display: block;
    transform: scaleX(0) translateX(-50%);
    transform-origin: center;
    background-color: var(--clr-primary);
    transition: transform 0.2s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1) translateX(-50%);
  }
`;

export const HeaderNavOverlay = styled.div`
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100vw;
  height: calc(100vh - var(--header-height));
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scaleY(0);
  transition: opacity 0.1s ease-in-out;
`;

export const HeaderBrowseWrapper = styled.div`
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

export const HeaderCategoriesUL = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-inline-start: 0;
`;

export const HeaderCategoriesLI = styled.li`
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

export const HeaderSubcategoryWrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  right: -100%;
  background-color: #fff;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
  transform: scaleX(0);
  transform-origin: left;
  transition: all 0.1s ease-in-out;
`;
