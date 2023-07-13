import React, { useEffect, useRef, useState } from 'react';

import * as S from './EditRecordModal.styles';
import TodayMarker from '../../TodayMarker/TodayMarker';


import { db } from '../../../firebase.config';
import { child, get, push, ref, remove, set, update } from 'firebase/database';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { editDataState, editModalState } from '../../../recoil/atom';

interface Props {
  date: string,
  marker: string,
  contributions: number,
  comment: string,
  nickname: string
}


interface ErrorMessage {
  markerError: string,
  commentError: string,
  imageListError: string,
}

const initErrorMessage = {
  markerError: '',
  commentError: '',
  imageListError: '',
}


const EditRecordModal = () => {
  const editData = useRecoilState(editDataState);
  const setShowEditModal = useSetRecoilState(editModalState);
  const data = editData[0] as Props;
  const [marker, setMarker] = useState<string>(data.marker);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    markerError: '',
    commentError: '',
    imageListError: '',
  });

  const editHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (marker === '') {      
      errorMessage.markerError = 'marker를 선택해주세요.';
      setErrorMessage({...errorMessage});
      return;
    }

    if (commentRef.current?.value === '') {
      errorMessage.commentError = 'comment는 필수 입력 사항입니다.';
      setErrorMessage({...errorMessage});
      return;
    }

    get(child(ref(db), 'record/' + data.nickname)).then((snapshot) => {
      if (snapshot.exists()) {
        for (const recordDate in snapshot.val()) {
          if (recordDate === data.date){
            update(ref(db, `record/${data.nickname}/${data.date}/${snapshot.val()[data.date].length - 1}`), {
              comment: commentRef.current!.value,
              marker: marker
            });
            console.log('업데이트 완료');
            setShowEditModal(false);
          }
        }
      }
    });
  };

  const removeHandler = async () => {
    if (confirm('정말 삭제하시겠습니까?')){
      get(child(ref(db), 'record/' + data.nickname)).then((snapshot) => {
        if (snapshot.exists()) {
          for (const recordDate in snapshot.val()) {
            if (recordDate === data.date){
              remove(ref(db, `record/${data.nickname}/${data.date}/${snapshot.val()[data.date].length - 1}`));
              console.log('삭제 완료');
              setShowEditModal(false);
            }
          }
        }
      });  
    }
    
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          {`${data.date} `} 기록하기
        </S.Title>
      </S.Header>

      <S.Form>
        <TodayMarker state={marker} marker={setMarker}/>

        Comment
        <S.ContributionLabel htmlFor="contribution">
          <S.Comment id="contribution" ref={commentRef}>{data.comment}</S.Comment>
        </S.ContributionLabel>

        
        <S.ErrorMessage>
          {(errorMessage.markerError.length > 0 && errorMessage.markerError) || (errorMessage.imageListError.length > 0 && errorMessage.imageListError) || (errorMessage.commentError.length > 0 && errorMessage.commentError)}
        </S.ErrorMessage>

        <S.ButtonContainer>
          <S.EditButton type="button" onClick={editHandler} >수정</S.EditButton>
          <S.RemoveButton type="button" onClick={removeHandler} >삭제</S.RemoveButton>
        </S.ButtonContainer>
      </S.Form>
    </S.Container>
  );
}
export default EditRecordModal;