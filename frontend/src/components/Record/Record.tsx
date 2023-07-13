import { Dispatch, SetStateAction } from 'react';
import { useSetRecoilState } from 'recoil';
import { modalState } from '../../recoil/atom';

import * as S from './Record.styles';

interface Props {
  onClick?: Dispatch<SetStateAction<boolean>>;
}

const Record = (props: Props) => {
  const setShowRecordModal = useSetRecoilState(modalState);

  const recordHandler = () => {
    setShowRecordModal(true);
    document.querySelector('body')?.style.setProperty('background-color','rgba(0, 0, 0, 0.3)');
  };

  return (
    <S.Container>
      <S.Title>Today</S.Title>
      <S.RecordButton onClick={recordHandler}>기록하기</S.RecordButton>
    </S.Container>
  );
};

export default Record;
