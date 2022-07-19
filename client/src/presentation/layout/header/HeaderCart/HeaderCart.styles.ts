import styled from "styled-components";

export const HeaderCartNoItemsWrapper = styled.div`
  width: 300px;
  padding: 20px;
`;

export const HeaderCartPreview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 420px;
  max-height: 600px;
  overflow-y: auto;

  & > button:last-of-type {
    align-self: flex-end;
  }
`;

export const HeaderCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background: #efefef;
    border-radius: 100px;

    &:hover {
      background: #ddd;
    }
  }

  & > *:not(:last-child) {
    /* margin-bottom: 20px; */
    border-bottom: 1px solid #efefef;
  }
`;

export const HeaderCartItemsInfoWrapper = styled.div`
  display: flex;
  padding: 20px 0;

  & > div > a > img {
    margin-right: 10px;
  }

  & > span {
    margin-left: auto;
    align-self: flex-end;
  }
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
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;
