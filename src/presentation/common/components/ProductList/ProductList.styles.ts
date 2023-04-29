import styled from "styled-components";

export const ProductListWrapper = styled.div`
  display: flex;
  overflow-x: scroll;

  /* for firefox */
  scrollbar-width: thin;
  scrollbar-color: #efefef white;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #efefef;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ddd;
  }
`;

export const ProductListUL = styled.ul`
  width: 100%;
  list-style: none;
  padding-inline-start: 0;
  display: flex;
`;

export const ProductListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const ProductItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

export const ProductItemText = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;
