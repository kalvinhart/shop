import styled from "styled-components";

export const DropDownSubcategoryWrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  right: -100%;
  background-color: #fff;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
  transform: scaleX(0);
  transform-origin: left;
  transition: all 0.1s ease-in-out;
`;
