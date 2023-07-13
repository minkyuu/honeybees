import { ReactNode, useEffect, useState } from 'react';
import { getActivities } from '../../apis/recordApi';

import { useRecoilState } from 'recoil';
import { editModalState, modalState } from '../../recoil/atom';
import EditRecordModal from '../Modal/EditRecordModal/EditRecordModal';

import * as S from './MyActivity.styles';

interface MyActivityProps {
  nickname: string;
}

const MyActivity = (props: MyActivityProps) => {
  const isRecord = useRecoilState(modalState);
  const isEditRecord = useRecoilState(editModalState);
  const showEditModal = useRecoilState(editModalState);
  const [activities, setActivities] = useState<ReactNode[]>([]);

  useEffect(() => {
    getActivities(props.nickname, setActivities);
  }, [isRecord[0], isEditRecord[0]]);


  return (
    <S.Container>
      <S.Title>
        My Activity
      </S.Title>
      <S.ActivitySection>
        {activities}  
      </S.ActivitySection>
      {showEditModal[0] && <EditRecordModal />}
    </S.Container>
    );
};
export default MyActivity;
