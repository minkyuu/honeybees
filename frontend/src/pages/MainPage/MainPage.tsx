import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { child, get, ref } from 'firebase/database';
import { db } from '../../firebase.config';
import Header from '../../components/Header/Header';

import * as S from './MainPage.styles';

const MainPage = () => {
  const [nickname, setNickname] = useState<string | undefined>();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const sessionId = sessionStorage.getItem('SESSION_ID');

  // 로그인 페이지가 아닌 다른 페이지에서 넘어온 경우 (location.state 존재 x)
  if (!location.state) {
    useEffect(() => {
      if (sessionId){
        get(child(ref(db), 'session/' + sessionId)).then((snapshot) => {
          if (snapshot.exists()) {
            setNickname(snapshot.val().nickname);
            setIsLogin(true);
          }
        });
      }
    }, []);
  } else if (sessionId) {
    // 로그인 화면에서 넘어온 경우 (location.state 존재)
    useEffect(() => {
      setNickname(location.state.nickname);
      setIsLogin(true);
    }, []);
  }

  const logoutHandler = () => {
    sessionStorage.removeItem('SESSION_ID');
    setShowModal(false);
    setIsLogin(false);
    navigate('/main');
  };

  return (
    <>
      <Header
        nickname={nickname}
        isLogin={isLogin}
        isOpenModal={showModal}
        openModal={setShowModal}
        logout={logoutHandler}
      />
      <S.Container onClick={() => showModal && setShowModal(false)}>
        <Outlet />
      </S.Container>
    </>
  );
};
export default MainPage;
