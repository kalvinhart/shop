import styled from "styled-components";
import { H3 } from "../../../styles/fontStyles";
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

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 240px;
    margin: 0 20px 0 0;
  }

  & ${H3} {
    margin-top: 0;
  }
`;

export const StyledUL = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 10px;
  display: flex;
  flex-direction: row;
  list-style: none;
  overflow-x: auto;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: column;
  }
`;

export const StyledLI = styled.li``;
