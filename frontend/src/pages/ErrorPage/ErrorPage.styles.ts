import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export const ErrorMessage = styled.h2`
  font-size: 42px;
`;

export const MovePrevButton = styled.button`
  display: block;
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