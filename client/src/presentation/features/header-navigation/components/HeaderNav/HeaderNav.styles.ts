import styled from "styled-components";
import { mediaSizes } from "../../../../common/styles";

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
