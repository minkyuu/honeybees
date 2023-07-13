import styled from "styled-components";

export const SearchLabel = styled.label`
  position: sticky;
  background-color: white;
  z-index: 1;
  top: 0;
  margin: 48px 0;
  display: flex;
  align-items: center;
  width: 600px;
  height: 48px;
  border: 1px solid gray;
  border-radius: 14px;
`;

export const SearchIcon = styled.img`
  margin: 0 14px;
  width: 24px;
  height: 22px;
`;

export const SearchInput = styled.input`
  border: none;
  width: 520px;
  height: 36px;
  // padding: 0 12px;
`;