import styled from "styled-components";
import mediaSizes from "../../../styles/media";

export const StyledHeaderUserButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledUserInfoWrapper = styled.div`
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
  display: flex;
  justify-content: space-between;
`;

export const StyledUserUL = styled(UL)`
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 15px;

    @media screen and (min-width: ${mediaSizes.large}) {
      margin-right: 20px;
    }
  }
`;

export const StyledHoverableLI = styled(LI)`
  position: relative;

  &:hover ~ [data-name="overlay"] {
    opacity: 1;
  }

  &:hover > div {
    transform: scaleY(1);
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

const DropDown = styled.div`
  position: absolute;
  z-index: 1;
  top: 110%;
  background-color: #fff;
  box-shadow: var(--box-shadow-small);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.1s ease-in-out;
`;

export const StyledUserDropDownWrapper = styled(DropDown)`
  left: 0;
  width: 200px;
`;

export const StyledCartDropDownWrapper = styled(DropDown)`
  right: 0;
  min-width: 600px;
  padding: 20px;
`;

export const StyledDropDownUL = styled(UL)`
  flex-direction: column;
`;

export const StyledDropDownLI = styled(LI)`
  min-width: 200px;
  padding: 20px;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;
