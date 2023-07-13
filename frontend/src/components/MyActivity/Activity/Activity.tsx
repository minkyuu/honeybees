import React from 'react';

import * as S from './Activity.styles';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { editDataState, editModalState } from '../../../recoil/atom';

import good1 from '../../../assets/marker/bee1.png';
import good2 from '../../../assets/marker/bee2.png';
import good3 from '../../../assets/marker/bee3.png';
import good4 from '../../../assets/marker/bee4.png';
import good5 from '../../../assets/marker/bee5.png';

interface Props {
  date: string,
  marker: string,
  contributions: number,
  comment: string,
  nickname: string,
}

const Activity = (props: Props) => {
  const editModal = useRecoilState(editModalState);
  const setEditData = useSetRecoilState(editDataState);
  const setShowEditModal = useSetRecoilState(editModalState);
  
  const editActivity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    setEditData(props);
    setShowEditModal(true);
  }
  
  const getImgSrc = (marker: string) => {
    let result = '';
    switch(marker) {
      case 'good1':
        result = good1;
        break;
      case 'good2':
        result = good2;
        break;
      case 'good4':
        result = good4;
        break;
      case 'good5':
        result = good5;
        break;
      default:
        result = good3;
    }
    return result;
  }

  const imgSrc = getImgSrc(props.marker);
  
  return (
    <S.Container>
      <S.Date>{props.date}</S.Date>
      {/* <S.Marker>{props.marker}</S.Marker> */}
      <S.Marker src={imgSrc}/>
      <S.ContributionCount>{`${props.contributions} Clear`}</S.ContributionCount>
      <S.EditButton onClick={editActivity}>수정</S.EditButton>
    </S.Container>
  );
}
export default Activity;