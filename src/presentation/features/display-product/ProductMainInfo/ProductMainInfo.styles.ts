import styled from "styled-components";
import { mediaSizes, SpanPrice } from "../../../common/styles";

export const ProductMainInfoWrapper = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: ${mediaSizes.large}) {
    padding-left: 20px;
  }
`;

export const ProductHeading = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const ProductInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & ${SpanPrice} {
    margin-bottom: 20px;
  }
`;

export const ProductTypeInfo = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
