import styled from "styled-components";

export const StyledProductBackground = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  border: 2px solid var(--clr-borders);
`;

export const StyledProductMainInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
`;

export const StyledProductMainInfo = styled.div`
  width: 100%;
  max-width: 380px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const StyledProductTitle = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledProductMainInfoText = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const StyledProductInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledProductImageWrapper = styled.div`
  width: 600px;
  height: 350px;
  display: flex;
  justify-content: center;
`;

export const StyledProductImage = styled.img`
  height: 350px;
`;

export const StyledProductMoreInfo = styled.div`
  display: flex;
`;
