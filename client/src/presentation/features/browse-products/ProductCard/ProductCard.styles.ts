import styled from "styled-components";
import { SpanPrice } from "../../../common/styles";

export const CardBackground = styled.div`
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

export const CardImage = styled.img`
  height: 250px;
  max-width: 280px;
`;

export const CardButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
