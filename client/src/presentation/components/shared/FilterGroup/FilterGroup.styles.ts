import styled from "styled-components";

export const FilterGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
