import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 40px 0 55px;
  height: 85px;
  gap: 20px;
  font-size: 20px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  margin-right: 24px;

  /* color: white;
  background-color: orange; */
`;

export const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin-right: 8px;
`;

export const Login = styled(Link)`
  margin-left: auto;
  text-decoration: none;
  color: black;
  font-size: 18px;
`;

export const Register = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
`;

export const UserProfile = styled.button`
  display: block;
  margin-left: auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  appearance: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: transparent;

  &:hover {
    /* box-shadow: 0 0 5px 2px rgba(0,0,0, 0.1); */
    border: 1px solid orange;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 75px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 135px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
  font-size: 16px;
`;

export const MyPage = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: orange;
  }
`;

export const Logout = styled.div`
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;
