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

  @media screen and (min-width: ${mediaSizes.large}) {
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

  & > *:not(:last-child) {
    margin-bottom: 25px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: column;
  }
`;

export const StyledSubcategoryUL = styled(StyledUL)`
  margin-top: 10px;
  padding-inline-start: 20px;
`;

export const StyledCategoryHeadingLI = styled.li`
  font-weight: bold;
`;

export const StyledLI = styled.li`
  font-weight: normal;
`;
