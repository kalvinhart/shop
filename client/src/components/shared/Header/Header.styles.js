import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: var(--header-height);
  width: 100%;
  padding: 10px 60px;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: var(--box-shadow);
`;

export const StyledUserInfoWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyledCartIconWrapper = styled.div`
  position: relative;
`;

export const StyledCartCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: red;
  font-size: 12px;
  color: white;
`;
