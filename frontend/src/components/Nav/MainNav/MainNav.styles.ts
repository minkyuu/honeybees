import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 55px;
  border: 1px solid gray;
  border-radius: 12px;
  font-size: 14px;
`

export const NavTab = styled(NavLink)`
  width: 100px;
  text-align: center;
  text-decoration: none;
  color: black;

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
  color: gray;
`;