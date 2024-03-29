import styled, { css } from "styled-components";
import mediaSizes from "./media";

export const H1 = styled.h1`
  font-size: 22px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 26px;
  }
`;

export const H2 = styled.h2`
  font-size: 18px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 22px;
  }
`;

export const H3 = styled.h3`
  font-size: 16px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 18px;
  }
`;

type LogoProps = {
  section: "header" | "footer";
};
export const SpanLogo = styled.span<LogoProps>`
  font-size: 22px;
  font-weight: bold;
  margin-right: 20px;

  ${({ section }) => {
    switch (section) {
      case "header":
        return css`
          color: var(--clr-font);
        `;

      case "footer":
        return css`
          color: white;
        `;

      default:
        return null;
    }
  }}

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 26px;
    margin-right: 40px;
  }
`;

export const SpanRegular = styled.span``;

export const SpanBold = styled.span`
  font-weight: bold;
`;

export const SpanGrey = styled.span`
  color: #666;
`;

export const SpanPrice = styled.span`
  font-size: 24px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 26px;
  }
`;

export const SpanDescription = styled.span`
  white-space: pre-line;
`;

type SpanStockProps = {
  inStock: boolean;
};

export const SpanStock = styled.span<SpanStockProps>`
  padding: 2px 5px;
  font-size: 12px;
  font-weight: bold;
  ${({ inStock }) => (inStock ? "color: #15f522;" : "color: red;")}
  background-color: rgba(200, 200, 200, 0.3);
  border-radius: var(--border-radius);
`;

type SpanErrorProps = {
  staticPosition?: boolean;
};

export const SpanError = styled.span<SpanErrorProps>`
  display: flex;
  align-items: center;
  position: absolute;
  top: 115%;
  right: 0;
  color: #dc143c;
  font-size: 12px;

  & svg {
    margin-right: 5px;
  }

  ${({ staticPosition }) =>
    staticPosition &&
    `
  position: static;
  font-size: 16px;
  `}
`;

export const SpanErrorBox = styled.span`
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #dc143c;
  border-radius: var(--border-radius);
  color: #dc143c;
`;

export const StyledParagraph = styled.p``;
