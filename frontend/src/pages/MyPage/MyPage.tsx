import { useState, useEffect } from 'react';
import Record from '../../components/Record/Record';

import Contribution from '../../components/Contribution/Contribution';
import MyActivity from '../../components/MyActivity/MyActivity';

import { db } from '../../firebase.config';
import { child, get, ref } from 'firebase/database';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { modalState } from '../../recoil/atom';
import RecordModal from '../../components/Modal/RecordModal/RecordModal';
import Calendar from '../../components/Calendar/Calendar';

const MyPage = () => {
  const showRecordModal = useRecoilState(modalState);
  const [nickname, setNickname] = useState<string | undefined>();

  const location = useLocation();
  const navigate = useNavigate();
  const sessionId = sessionStorage.getItem('SESSION_ID');

  // 로그인 안 한 회원인 경우 -> explore 화면으로 이동
  if (!location.state) {
    if (sessionId) {
      useEffect(() => {
        get(child(ref(db), 'session/' + sessionId)).then((snapshot) => {
          if (snapshot.exists()) {
            setNickname(snapshot.val().nickname);
          }
        });
      }, []);
    } else {
      useEffect(() => {
        if (confirm('로그인이 필요합니다. 로그인 하시겠습니까?')){
          navigate('/login');
        } else {
          navigate(-1);
        }
      }, []);
    }
  } else {
    useEffect(() => {
      setNickname(location.state.nickname);
    }, []);
  }

  return (
    <>
      {/* <Record /> */}
      <Calendar />
      {nickname && <MyActivity nickname={nickname} />}
      {/* {nickname && <Contribution nickname={nickname} />} */}
      {/* {showRecordModal[0] && nickname && <RecordModal nickname={nickname} />} */}
    </>
  );
};

export default MyPage;
