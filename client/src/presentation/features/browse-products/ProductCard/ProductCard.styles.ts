import styled from "styled-components";
import { mediaSizes, SpanPrice } from "../../../common/styles";

export const StyledCardBackground = styled.div`
  position: relative;
  width: 100%;
  min-width: 280px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);

  & ${SpanPrice} {
    margin-bottom: 20px;
  }

  & .imageLink {
    margin: 0 auto 20px;
  }
`;

export const StyledCardImage = styled.img`
  height: 250px;

  @media screen and (min-width: ${mediaSizes.med}) {
    max-width: 300px;
    height: 300px;
  }
`;

export const StyledCardButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
