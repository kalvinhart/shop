import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const HeaderUserNavWrapper = styled.div`
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
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export const CartIconWrapper = styled.div`
  position: relative;

  & svg {
    margin-left: 0;
  }
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
