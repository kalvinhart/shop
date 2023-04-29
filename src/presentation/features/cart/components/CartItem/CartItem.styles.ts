import styled from "styled-components";
import { mediaSizes } from "../../../../common/styles";

import { SpanGrey, SpanPrice } from "../../../../common/styles";

type SmallProps = {
  small?: boolean | undefined;
};

export const CartItemWrapper = styled.div<SmallProps>`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  ${(small) => small && "margin-bottom: 15px;"}

  & > a {
    align-self: flex-start;
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

export const CartButtonsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    margin: 0 10px 0 auto;
    width: 350px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > *:not(:last-child) {
      margin-bottom: 0;
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

    &[data-name="removeButton"] {
      position: absolute;

      & span {
        display: none;
      }

      @media screen and (min-width: ${mediaSizes.large}) {
        position: static;

        & span {
          display: inline;
        }

        & svg {
          margin-right: 5px;
        }
      }
    }
  }
`;
