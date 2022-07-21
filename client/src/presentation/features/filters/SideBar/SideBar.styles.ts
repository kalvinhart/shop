import styled from "styled-components";
import { H3 } from "../../../common/styles";
import { mediaSizes } from "../../../common/styles";

export const FiltersOverlay = styled.div`
  display: none;

  @media screen and (min-width: ${mediaSizes.med}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 999;
  }
`;

export const SideBarBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999999999999;
  height: 100vh;
  padding: 20px;
  padding-top: 40px;
  margin: 0 0 20px 0;
  display: none;
  flex-direction: column;
  background-color: white;
  overflow-x: scroll;

  &.show {
    display: flex;
  }

  @media screen and (min-width: ${mediaSizes.med}) {
    top: 50%;
    left: 50%;
    right: unset;
    height: 90%;
    width: 60%;
    transform: translate(-50%, -50%);
    border: var(--borders);
    box-shadow: var(--box-shadow-small);

    &.show + [data-name="filterOverlay"] {
      display: block;
    }
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    position: static;
    z-index: unset;
    display: flex;
    width: 300px;
    height: unset;
    margin: 0 20px 0 0;
    padding-top: 20px;
    overflow-x: unset;
    transform: unset;

    &.show + [data-name="filterOverlay"] {
      display: none;
    }
  }

  & ${H3} {
    margin-top: 0;
  }

  & button {
    margin-bottom: 20px;
  }
`;

export const UL = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 10px;
  display: flex;
  flex-direction: row;
  list-style: none;

  & > *:not(:last-child) {
    margin-bottom: 25px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: column;
  }
`;

export const SubcategoryUL = styled(UL)`
  margin-top: 10px;
  padding-inline-start: 20px;
`;

export const CategoryHeadingLI = styled.li`
  font-weight: bold;
`;

export const LI = styled.li`
  font-weight: normal;
`;

export const CloseFiltersButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  & svg {
    margin-left: 10px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    display: none;
  }
`;
