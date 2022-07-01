import styled from "styled-components";

export const PaginationButtonWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

type ButtonProps = {
  selected?: boolean;
};
export const PaginationButton = styled.button<ButtonProps>`
  padding: 10px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    `
  color: var(--clr-primary);
  `}

  &:hover {
    color: var(--clr-primary);
  }
`;
