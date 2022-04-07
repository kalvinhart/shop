import styled from "styled-components";
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

export const SpanLogo = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: var(--clr-font);
  margin-right: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 26px;
    margin-right: 40px;
  }
`;

export const SpanRegular = styled.span`
  font-size: 14px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 16px;
  }
`;

export const SpanBold = styled.span`
  font-weight: bold;
`;

export const SpanGrey = styled.span`
  color: #666;
  font-size: 14px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 16px;
  }
`;

export const SpanPrice = styled.span`
  font-size: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 26px;
  }
`;

export const SpanDescription = styled.span`
  font-size: 16px;
  white-space: pre-line;
`;

export const SpanStock = styled.span`
  padding: 2px 5px;
  font-size: 12px;
  font-weight: bold;
  ${({ inStock }) => (inStock ? "color: #15f522;" : "color: red;")}
  background-color: rgba(200, 200, 200, 0.3);
  border-radius: var(--border-radius);
`;

export const SpanError = styled.span`
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

export const StyledParagraph = styled.p``;
