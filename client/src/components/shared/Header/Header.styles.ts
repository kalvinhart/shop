import styled from "styled-components";
import mediaSizes from "../../../styles/media";

export const StyledHeaderWrapper = styled.div`
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
    padding: 10px 60px;
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
  padding: 0 20px;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.large}) {
    position: static;
    width: unset;
    height: unset;
  }
`;

export const StyledUserInfoWrapper = styled.div`
  margin: 0 15px 0 auto;
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 15px;

    @media screen and (min-width: ${mediaSizes.large}) {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    margin: 0 20px 0 auto;
  }

  & .mobileHidden {
    @media screen and (min-width: ${mediaSizes.large}) {
      display: block;
    }
  }
`;

export const StyledCartIconWrapper = styled.div`
  position: relative;
`;

export const StyledCartCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: red;
  font-size: 12px;
  color: white;
`;
