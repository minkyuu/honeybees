import { Link, useLocation } from 'react-router-dom';

import styles from './RegisterSuccessPage.module.css';

import * as S from './RegisterSuccessPage.styles';

const RegisterSuccessPage = () => {
  const location = useLocation();

  const id = location.state.id;
  const nickname = location.state.nickname;
  
  return (
    <S.Container>
      <S.Header>회원가입을 축하합니다!</S.Header>
      <S.Content>
        {nickname}님의 아이디는 "<S.NewId>{id}</S.NewId>"입니다.
      </S.Content>
      <S.PageLink to="/login">로그인 페이지로 이동</S.PageLink>
    </S.Container>
  );
}

export default RegisterSuccessPage;