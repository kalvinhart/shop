import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const ProductBackground = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
`;

export const ProductMainInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
  }
`;

export const ProductInfoGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${mediaSizes.large}) {
    width: 50%;
  }
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${mediaSizes.large}) {
    width: 600px;
    height: 350px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;

  @media screen and (min-width: ${mediaSizes.med}) {
    width: unset;
    height: 350px;
  }
`;

export const ProductDescriptionInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
  }
`;
