import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const FooterPaymentsWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;

  & svg:not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    margin-bottom: 0;
  }
`;
