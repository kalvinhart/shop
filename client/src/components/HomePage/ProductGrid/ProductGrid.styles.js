import styled from "styled-components";

export const StyledGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
