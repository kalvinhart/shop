import styled from "styled-components";
import { StyledInput } from "../../../styles/formStyles";

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

export const StyledSearchForm = styled.form`
  position: relative;
  width: 400px;
  height: 40px;

  & ${StyledInput} {
    width: 100%;
    height: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const StyledSearchButton = styled.button`
  position: absolute;
  right: -40px;
  top: 0;
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  background-color: #eee;
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ddd;
  }
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
