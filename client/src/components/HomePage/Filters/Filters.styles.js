import styled from "styled-components";
import mediaSizes from "../../../styles/media";

import { H3, SpanBold } from "../../../styles/fontStyles";

export const StyledFiltersBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: var(--borders);
  box-shadow: var(--box-shadow-small);
  margin-bottom: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
  }

  & ${H3} {
    display: none;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      display: block;
      margin-right: 10px;
    }
  }
`;

export const StyledFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-right: auto;
`;

export const StyledFilterSelectWrapper = styled.div`
  & ${SpanBold} {
    margin-right: 10px;
  }
`;
