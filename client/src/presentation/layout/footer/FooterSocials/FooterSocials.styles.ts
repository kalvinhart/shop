import styled from "styled-components";

export const FooterSocialsWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;

  & a,
  &:visited {
    color: #f7fafc;

    &:hover {
      color: #dae8f1;
    }
  }

  & *:not(:last-child) {
    margin-right: 10px;
  }
`;
