import styled from "styled-components";

export const HeaderCartNoItemsWrapper = styled.div`
  width: 250px;
  padding: 20px;
`;

export const HeaderCartPreview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 800px;
  max-height: 600px;
  overflow-y: auto;

  & > button:last-of-type {
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

export const HeaderCartHeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;
