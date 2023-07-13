import styled from "styled-components";

import dropdownButtonImg from '../../assets/down-arrow.png';

export const Container = styled.div`
  position: relative;
  width: 125px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 32px;
`;

export const DropdownButtonLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 125px;
  height: 32px;
  padding-left: 22px;
  border: 1px solid gray;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover,
  &:focus,
  &:active {
    border: 1px solid #f2bb13;
  }
`;

export const DropdownButton = styled.button`
  margin-right: 14px;
  background: url(${dropdownButtonImg}) no-repeat;
  background-size: contain;
  width: 13px;
  height: 13px;
  border: none;
  cursor: pointer;
`;


export const Dropdown = styled.ul`
  position: absolute;
  width: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // align-items: center;
  gap: 12px;
  margin: 0;
  padding: 12px 0;
  list-style: none;
  background-color: white;
  border: 1px solid gray;
  border-radius: 8px;
`;

export const TagList = styled.li`
  box-sizing: border-box;
  padding-left: 22px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    text-decoration: underline;
    color: #f2bb13;
  }
`;
