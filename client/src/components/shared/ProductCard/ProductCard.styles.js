import styled from "styled-components";
import { SpanPrice } from "../../../styles/fontStyles";

export const StyledCardBackground = styled.div`
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid var(--clr-borders);

  & ${SpanPrice} {
    margin-bottom: 20px;
  }
`;

export const StyledCardImage = styled.img`
  width: 260px;
  height: 220px;
  margin: 0 auto 20px;
`;

export const StyledCardButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;