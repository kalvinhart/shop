import styled from "styled-components";
import mediaSizes from "../../../styles/media";

export const StyledSideBarBackground = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
  overflow-x: auto;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 240px;
    margin: 0 20px 0 0;
  }
`;

export const StyledNav = styled.nav``;

export const StyledNavUL = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 10px;
  display: flex;
  flex-direction: row;
  list-style: none;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: column;
  }
`;

export const StyledNavLI = styled.li``;
