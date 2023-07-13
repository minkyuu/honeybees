import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  // gap: 24px;
  // width: 260px;
  height: 60px;
  // border-bottom: 1px solid gray;
  font-size: 14px;
`;

export const NavTab = styled(NavLink)`
  width: 120px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  text-decoration: none;
  color: black;
  margin: 0 4px;
  font-size: 14px;

  // border: 1px solid gray;
  // border-radius: 8px;

  &: hover {
    text-decoration: underline;
  }

  &.active {
    color: #F2BB13;
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const Separator = styled.span`
  
`;
