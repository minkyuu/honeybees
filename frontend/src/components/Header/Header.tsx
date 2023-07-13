import { Dispatch, SetStateAction } from 'react';
import * as S from './Header.styles';

interface HeaderProps {
  nickname?: string;
  isLogin: boolean;
  isOpenModal: boolean;
  openModal: Dispatch<SetStateAction<boolean>>;
  logout: Function;
  onClick?: any;
}

const Header = ({
  nickname,
  isLogin,
  isOpenModal,
  openModal,
  logout,
}: HeaderProps) => {
  
  return (
    <S.Container onClick={() => isOpenModal && openModal(false)}>
      <S.Logo to="/main">Honeybees 🐝</S.Logo>
      <S.Nav to="/main/my">Task</S.Nav>
      <S.Nav to="/main">Explore</S.Nav>
      {!isLogin ? (
        <>
          <S.Login to="/login">로그인</S.Login>
          <S.Register to="/register">회원가입</S.Register>
        </>
      ) : (
        <S.UserProfile onClick={() => openModal(true)} />
      )}
      {isOpenModal && (
        <S.Modal>
          <S.MyPage to={`/${nickname}`}>My Page</S.MyPage>
          <S.Logout onClick={() => logout()}>로그아웃</S.Logout>
        </S.Modal>
      )}
    </S.Container>
  );
};

export default Header;
