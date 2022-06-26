import styled from "styled-components";

export const HeaderCartPreview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 900px;

  & > div:last-of-type {
    align-self: flex-end;
  }
`;

export const HeaderCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const HeaderCartSubtotalGroup = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const HeaderCartButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;
