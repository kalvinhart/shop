import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(var(--header-height) + 50px);
  padding: 10px 20px;
  display: flex;
  align-items: flex-start;
  background-color: white;
  box-shadow: var(--box-shadow);
  z-index: 9999999;

  @media screen and (min-width: ${mediaSizes.large}) {
    padding: 10px 40px;
    height: var(--header-height);
    align-items: center;
  }
`;

export const StyledLowerHeader = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.large}) {
    position: static;
    width: 550px;
    height: unset;
    padding: 0 20px;
    justify-content: space-between;
  }
`;
