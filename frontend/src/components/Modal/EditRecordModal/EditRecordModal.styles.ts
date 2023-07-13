import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 12px 40px;
`;

export const Header = styled.div`
  position: relative;
  display: block;
  margin: 40px 0 50px;
`;  

export const Title = styled.h2`
  font-size: 14px;
  width: 346px;
  height: 52px;
  border-radius: 8px;
  text-align: center;
  line-height: 52px;
  background-color: #f2bb13;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 550px;
`;

export const ContributionLabel = styled.label`
  display: block;
`;


export const Comment = styled.textarea`
  font-family: 'Noto Sans KR', sans-serif;
  padding: 8px;
  resize: none;
  width: 530px;
  height: 100px;
  outline: none;
  border-radius: 8px;
  
  &:focus {
    border: 1.5px solid #f2bb13;
  }
`;

export const ErrorMessage = styled.p`
  height: 20px;
  color: red;
  margin: 10px auto 0;
`;

export const ButtonContainer = styled.div`
  margin: 12px auto 0;
  display: flex;
  gap: 12px;
`;

export const EditButton = styled.button`
  width: 110px;
  height: 35px;
  border: none;
  border-radius: 12px;
  background-color: #f2bb13;
  margin: 10px auto;
`;

export const RemoveButton = styled.button`
  width: 110px;
  height: 35px;
  border: none;
  border-radius: 12px;
  background-color: #f2bb13;
  margin: 10px auto;
`;

