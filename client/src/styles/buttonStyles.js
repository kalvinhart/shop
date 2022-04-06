import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  & svg {
    margin-right: 10px;
  }

  ${({ type }) => {
    switch (type) {
      case "filter":
        return css`
          padding: 4px 10px;
          font-size: 12px;
          background-color: var(--clr-secondary);
          border-radius: var(--border-radius);

          &:not(:last-child) {
            margin-right: 10px;
          }

          &:hover {
            background-color: var(--clr-secondary-hover);
          }

          & svg {
            margin: 0 0 0 10px;
          }
        `;

      case "primary":
        return css`
          background-color: var(--clr-primary);
          color: var(--clr-button-text);

          &:hover {
            background-color: var(--clr-primary-hover);
          }
        `;

      case "secondary":
        return css`
          background-color: var(--clr-secondary);
          color: var(--clr-button-text);

          &:hover {
            background-color: var(--clr-secondary-hover);
          }
        `;
    }
  }}

  ${({ $large }) => $large && "padding: 10px 20px;"}

  ${({ $small }) => $small && "padding: 5px 10px;"}

  &:disabled {
    cursor: not-allowed;
    background-color: var(--clr-button-disabled);
  }
`;

export const ButtonCategory = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
