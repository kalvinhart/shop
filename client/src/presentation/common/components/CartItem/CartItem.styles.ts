import styled from "styled-components";
import { mediaSizes } from "../../styles";

import { SpanGrey, SpanPrice } from "../../styles";

export const CartItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const CartItemImage = styled.img`
  width: 120px;
  border-radius: var(--border-radius);
  margin-right: 15px;

  @media screen and (min-width: ${mediaSizes.large}) {
    margin-right: 30px;
  }
`;

export const CartItemContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
  }
`;

export const CartItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & a {
    margin-bottom: 10px;
  }
`;

export const CartItemInfoGroup = styled.div`
  display: flex;

  & ${SpanGrey} {
    margin-right: 10px;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CartButtonsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    margin-top: 0;
    margin-left: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > *:not(:last-child) {
      margin-bottom: 0;
      margin-right: 40px;
    }
  }

  & ${SpanPrice} {
    margin-top: 20px;
    align-self: flex-end;

    @media screen and (min-width: ${mediaSizes.large}) {
      margin-top: 0;
      align-self: auto;
    }
  }

  & button {
    align-self: flex-end;

    @media screen and (min-width: ${mediaSizes.large}) {
      align-self: auto;
    }
  }
`;
