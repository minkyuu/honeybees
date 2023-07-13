import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  margin: 50px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
`;

export const HoneyBees = styled.h1`
  font-size: 40px;
  margin-bottom: 62px;
`;

export const WelcomeComment = styled.p`
  position: absolute;
  width: 240px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  top: 85px;
  right: -10px;
  color: white;
  background-color: #0583F2;
  border-radius: 18px;
`;

export const Comment = styled.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 40px;
    left: 0%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #0583F2;
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }
`;

export const WelcomeImage = styled.img`
  width: 300px;
`;


export const LinkContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 14px;
`;

export const PageLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  width: 150px;
  height: 40px;
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