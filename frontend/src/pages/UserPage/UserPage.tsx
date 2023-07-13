import * as S from './UserPage.styles';

import { db } from '../../firebase.config';
import { child, get, ref, set } from 'firebase/database';

import { Outlet, useNavigate, useParams } from 'react-router-dom';

import UserNav from '../../components/Nav/UserNav/UserNav';
import UserInfo from '../../components/UserInfo/UserInfo';
import { Suspense, useEffect } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';

const UserPage = () => {
  const pageParam = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    get(child(ref(db), 'nickname/' + pageParam.nickname)).then((snapshot) => {
      if (!snapshot.exists()) {
        navigate('/error');
      }
    });
  },[]);

  return (
    <S.Container>
      <Suspense fallback={<p>Loading...</p>}>
        <UserInfo nickname={pageParam.nickname} />
        <S.UserContributions>
          <UserNav />
          <Outlet/>
        </S.UserContributions>
      </Suspense>
    </S.Container>
  );
}

export default UserPage;