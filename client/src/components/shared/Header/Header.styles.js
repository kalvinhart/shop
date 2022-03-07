import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: var(--header-height);
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: var(--box-shadow);
`;

export const StyledUserInfoWrapper = styled.div`
  margin-left: auto;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;
