import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const FooterNavWrapper = styled.div`
  margin: 20px 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const FooterNavUL = styled.ul`
  width: 200px;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-inline-start: 0;

  & li:first-of-type {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    margin-right: 40px;
    padding-inline-start: 60px;
  }
`;

export const FooterNavLI = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  & a,
  & a:visited {
    font-size: 14px;
    color: #f7fafc;

    &:hover {
      color: #dae8f1;
    }
  }
`;
