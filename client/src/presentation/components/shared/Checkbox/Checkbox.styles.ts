import styled from "styled-components";

export const CheckboxUI = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;

  &::after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const CheckboxLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;

  &:hover input ~ ${CheckboxUI} {
    background-color: #ccc;
  }

  & ${CheckboxUI}:after {
    left: 8px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  & input:checked ~ ${CheckboxUI} {
    background-color: var(--clr-primary);
  }

  & input:checked ~ ${CheckboxUI}:after {
    display: block;
  }
`;

export const CheckboxBox = styled.input``;
