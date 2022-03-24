import styled from "styled-components";

export const StyledSideBarBackground = styled.div`
  width: 240px;
  padding: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
`;

export const StyledNav = styled.nav``;

export const StyledNavUL = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 10px;
  display: flex;
  flex-direction: column;
  list-style: none;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StyledNavLI = styled.li``;
