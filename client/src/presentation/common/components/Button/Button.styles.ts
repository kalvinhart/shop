import styled, { css } from "styled-components";

export type StyledButtonProps = {
  variant: "filter" | "primary" | "secondary" | "icon" | "trash" | "transparent";
  size?: "regular" | "small" | "large";
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 8px 16px;
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  & svg {
    margin-right: 10px;
  }

  ${({ variant }) => {
    switch (variant) {
      case "icon":
        return css`
          position: absolute;
          right: 0;
          padding: 5px;
          background-color: transparent;
          box-shadow: none;
          font-size: 26px;
          color: var(--clr-secondary);
          transition: color 0.2s ease-in-out;

          &:hover {
            color: var(--clr-secondary-hover);
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

      // used in the view cart page for removing
      // an item from cart. (trash can icon)
      case "trash":
        return css`
          padding: 10px;
          background-color: transparent;
          box-shadow: none;
          color: #dc143c;

          &:hover {
            color: #880808;
          }

          & svg {
            margin-right: 0;
          }
        `;

      case "transparent":
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          color: black;
          font-weight: bold;
          box-shadow: none;

          &:hover {
            text-decoration: underline;
          }

          & svg {
            margin: 0 0 0 5px;
          }
        `;
    }
  }}

  ${({ size }) => size === "large" && "padding: 10px 20px;"}

  ${({ size }) => size === "small" && "padding: 5px 10px;"}

  &:disabled {
    cursor: not-allowed;
    background-color: var(--clr-button-disabled);
  }
`;
