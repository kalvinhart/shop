import styled from "styled-components";

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;

  & svg {
    margin-right: 5px;
  }

  ${({ primary }) =>
    primary &&
    `
  background-color: var(--clr-primary);
  color: var(--clr-button-primary-text);
  `}

  ${({ secondary }) =>
    secondary &&
    `
  background-color: var(--clr-secondary);
  color: var(--clr-button-secondary-text);
  `}

  ${({ large }) =>
    large &&
    `
    padding: 10px 20px;
  `}

  &:hover {
    text-decoration: underline;
  }
`;
