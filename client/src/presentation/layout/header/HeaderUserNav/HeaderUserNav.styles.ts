import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const HeaderUserButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const UserInfoWrapper = styled.div`
  isolation: isolate;
  margin: 0 15px 0 auto;

  @media screen and (min-width: ${mediaSizes.large}) {
    margin: 0 20px 0 auto;
  }
`;

const UL = styled.ul`
  display: flex;
  list-style: none;
  padding-inline-start: 0;
`;

export const LI = styled.li`
  padding: 5px 5px;
  display: flex;
  justify-content: space-between;
`;

export const UserUL = styled(UL)`
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 10px;

    @media screen and (min-width: ${mediaSizes.large}) {
      margin-right: 20px;
    }
  }
`;

export const HoverableLI = styled(LI)`
  position: relative;

  &:hover > div,
  &:focus-within > div {
    transform: scaleY(1);
  }
`;

export const CartIconWrapper = styled.div`
  position: relative;
`;

export const CartCount = styled.div`
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

const DropDown = styled.div`
  position: absolute;
  z-index: 1;
  top: 110%;
  background-color: #fff;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.1s ease-in-out;
`;

export const UserDropDownWrapper = styled(DropDown)`
  left: 0;
  width: 200px;
`;

export const CartDropDownWrapper = styled(DropDown)`
  display: none;

  @media screen and (min-width: ${mediaSizes.xl}) {
    display: block;
    right: -60px;
    box-shadow: var(--box-shadow);
  } ;
`;

export const DropDownUL = styled(UL)`
  flex-direction: column;
`;

export const DropDownLI = styled(LI)`
  min-width: 200px;
  padding: 20px;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;
