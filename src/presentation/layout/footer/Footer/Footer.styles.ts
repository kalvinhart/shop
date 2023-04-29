import styled from "styled-components";
import { mediaSizes } from "../../../common/styles";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 60px 20px;
  background-color: #1d3a4e;
  color: #f7fafc;
`;

export const FooterContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FooterCenterWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid white;
  border-bottom: 1px solid white;

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
  }
`;
