import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export const Header = styled.h2`

`;

export const Content = styled.div`
  margin-bottom: 45px;
`;

export const NewId = styled.span`
  font-weight: bold;
  color: #F2BB13;
`;

export const PageLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  width: 180px;
  height: 44px;
  background-color: rgb(242, 187, 19);;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: scale(1.06);
  }
`;