import styled from "styled-components";
import { mediaSizes } from "../../styles";

type SmallProps = {
  small?: boolean | undefined;
};

export const CartItemInfoMainWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CartItemImage = styled.img<SmallProps>`
  width: 120px;
  border-radius: var(--border-radius);
  margin-right: 15px;

  ${(small) => small && "width: 80px;"}

  @media screen and (min-width: ${mediaSizes.large}) {
    margin-right: 30px;
  }
`;

export const CartItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & a {
    margin-bottom: 10px;
  }
`;

export const CartItemInfoGroup = styled.div<SmallProps>`
  display: flex;

  & span {
    ${({ small }) => small && "font-size: 12px;"}
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
