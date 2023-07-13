import React, { ReactNode, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { db } from '../../firebase.config';
import { child, get, ref } from 'firebase/database';
import Activity from '../../components/MyActivity/Activity/Activity';
import { getActivities } from '../../apis/recordApi';


import * as S from './RecordPage.styles';
import { useRecoilState } from 'recoil';
import { modalState, editModalState } from '../../recoil/atom';
import EditRecordModal from '../../components/Modal/EditRecordModal/EditRecordModal';

const RecordPage = () => {
  // const showRecordModal = useRecoilState(modalState);
  const showEditModal = useRecoilState(editModalState);
  const pageParam = useParams();
  const navigate = useNavigate();
  const [activities, setActivities] = useState<ReactNode[]>([]);

  useEffect(() => {
    getActivities(pageParam.nickname, setActivities);
  }, []);

  return (
    <>
      <S.Container>
        {/* Record Page */}
        {activities}
      </S.Container>
      {/* {showRecordModal[0] && pageParam.nickname && <RecordModal nickname={pageParam.nickname}/>} */}
      {showEditModal[0] && <EditRecordModal />}
    </>
  );
};
export default RecordPage;
