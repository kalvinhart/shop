import styled from "styled-components";

export const HeaderNavButton = styled.button`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    width: 100%;
    height: 2px;
    display: block;
    transform: scaleX(0) translateX(-50%);
    transform-origin: center;
    background-color: var(--clr-primary);
    transition: transform 0.2s ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1) translateX(-50%);
  }
`;
