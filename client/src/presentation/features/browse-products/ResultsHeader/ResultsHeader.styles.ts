import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

import { SpanBold } from "../../../common/styles";

export const FiltersBackground = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
  margin-bottom: 20px;

  @media screen and (min-width: ${mediaSizes.med}) {
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.med}) {
    justify-content: flex-start;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${mediaSizes.med}) {
    width: unset;
  }
`;

export const FilterTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-right: auto;

  @media screen and (min-width: ${mediaSizes.med}) {
    margin-top: 0;
  }
`;

export const FilterSelectWrapper = styled.div`
  & ${SpanBold} {
    margin-right: 10px;
    font-size: 14px;
  }
`;

export const ShowFiltersButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: #ccc;

  & svg {
    margin-right: 10px;
  }

  @media screen and (min-width: ${mediaSizes.med}) {
    margin-right: auto;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    display: none;
  }
`;

export const CurrentFiltersWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const FilterTags = styled.span`
  padding: 4px 10px;
  font-size: 12px;
  background-color: var(--clr-secondary);
  border-radius: var(--border-radius);

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
