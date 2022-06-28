import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

import { SpanPrice } from "../../../common/styles";

export const StyledProductBackground = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
`;

export const StyledProductMainInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
  }
`;

export const StyledProductMainInfo = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: ${mediaSizes.large}) {
    padding-left: 20px;
  }
`;

export const StyledProductTitle = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledProductMainInfoText = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const StyledProductInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & ${SpanPrice} {
    margin-bottom: 20px;
  }
`;

export const StyledProductImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${mediaSizes.large}) {
    width: 600px;
    height: 350px;
  }
`;

export const StyledProductImage = styled.img`
  width: 100%;

  @media screen and (min-width: ${mediaSizes.med}) {
    width: unset;
    height: 350px;
  }
`;

export const StyledProductMoreInfo = styled.div`
  display: flex;
`;
