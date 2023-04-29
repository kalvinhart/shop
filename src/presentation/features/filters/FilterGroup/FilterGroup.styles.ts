import styled from "styled-components";

export const FilterGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:first-of-type {
    margin-top: 20px;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  & button {
    align-self: flex-start;
    font-size: 14px;
  }
`;
