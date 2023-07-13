import { useState, useRef, Dispatch, SetStateAction } from 'react';

import TodayMarker from '../../TodayMarker/TodayMarker';

import { db, firestoreDB, storage } from '../../../firebase.config';
import { child, get, ref, set } from 'firebase/database';

import {
  collection,
  query,
  where,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";


import {
  ref as storageRef,
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';

import * as S from './RecordModal.styles';
import ToggleButton from '../../Button/ToggleButton';
import ImageUploader, { ImageList } from '../../ImageUploader/ImageUploader';
import TagDropdown from '../../TagInput/TagDropdown';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalState } from '../../../recoil/atom';

interface RecordModalProps {
  nickname: string;
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

const RecordModal = (props: RecordModalProps) => {
  const setShowRecordModal = useSetRecoilState(modalState);
  
  const [isRecordMode, setIsRecordMode] = useState(true);
  const [marker, setMarker] = useState<string>('');
  const [imgList, setImgList] = useState<ImageList[]>([]);
  const [imgNameList, setImgNameList] = useState<string[]>([]);
  const [tag, setTag] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    markerError: '',
    commentError: '',
    imageListError: '',
  });
  
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const nickname = props.nickname;

  const dateToString = (date: Date): string => {
    return today.getFullYear() +
      '-' + ((today.getMonth()+1) < 9 ? "0" + (today.getMonth()+1) : (today.getMonth()+1)) +
      '-' + ((today.getDate()) < 9 ? "0" + (today.getDate()) : (today.getDate()));  
  };
  
  const today = new Date();
  const todayToString = dateToString(today);

  const resetErrorMessage = () => {
    errorMessage.markerError = initErrorMessage.markerError;
    errorMessage.commentError = initErrorMessage.commentError;
    errorMessage.imageListError = initErrorMessage.imageListError;
    
    setErrorMessage({...errorMessage});
  };


  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit handler ~~', e.currentTarget);
    console.log('tag 확인 : ', tag);

    resetErrorMessage();

    if (isRecordMode){
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

      // 1. table: Record - nickname or id -> 일자별 JSON
      // 필요 데이터 : nickname or id
      // 저장 데이터 : { date: {marker, comment}

      await get(child(ref(db), 'record/'+ nickname)).then((snapshot) => {
        if (snapshot.exists()){
          const data = snapshot.val();
          if (data[todayToString]) {
            data[todayToString].push({
              marker: marker,
              comment: commentRef.current?.value,
            });
            set(ref(db, 'record/' + nickname), data);
          } else {
            data[todayToString] = [{
              marker: marker,
              comment: commentRef.current?.value,
            }];

            set(ref(db, 'record/' + nickname), data);
          }
        } else {
          set(ref(db, 'record/' + nickname), {
            [todayToString]: [{
              marker: marker,
              comment: commentRef.current?.value,
            }]
          });
        }
      });

      await console.log('record 등록 완료');

      // 2. table: Contribution
      await get(child(ref(db), 'contribution/'+ nickname)).then((snapshot) => {
        if (snapshot.exists()){
          const data = snapshot.val();
          if (data[todayToString]){
            data[todayToString].record++;
            
            set(ref(db, 'contribution/' + nickname), data);
          } else {
            data[todayToString] = {
              record: 1,
              post: 0,
            };
            
            set(ref(db, 'contribution/' + nickname), data);
          }
        } else {
          set(ref(db, 'contribution/' + nickname), {
            [todayToString]: {
              record: 1,
              post: 0,
            }
          });
        }
      });

    /*************  공유하기 로직  *************/
    } else if (!isRecordMode) {
      if (imgList.length === 0) {      
        errorMessage.imageListError = '사진을 업로드해주세요.';
        setErrorMessage({...errorMessage});
        return;
      }

      if (commentRef.current?.value === '') {
        errorMessage.commentError = 'comment는 필수 입력 사항입니다.';
        setErrorMessage({...errorMessage});
        return;
      }

      await get(child(ref(db), 'post/'+ nickname)).then((snapshot) => {
        if (snapshot.exists()){
          const data = snapshot.val();

          if (data[todayToString]) {
            data[todayToString].push({
              tag: tag,
              imageList: imgNameList,
              comment: commentRef.current?.value,
            });
            set(ref(db, 'post/' + nickname), data);
          } else {
            data[todayToString] = [{
              tag: tag,
              imageList: imgNameList,
              comment: commentRef.current?.value,
            }];

            set(ref(db, 'post/' + nickname), data);
          }
        } else {
          set(ref(db, 'post/' + nickname), {
            [todayToString]: [{
              tag: tag,
              imageList: imgNameList,
              comment: commentRef.current?.value,
            }]
          });
        }
      });


      // Firestore로 변경 (recentPost 페이징 처리하기 위해서)
      const collectionRef = collection(firestoreDB, 'recentPost');
    
      // 모든 데이터 가져오기 : getDocs()
      const result = await getDocs(collectionRef);
      console.log(result);


      // // 첫번째 post 컬렉션의 스냅샷을 작성날짜 기준 내림차순 (orderBy 2번째 인자 생략시 기본 내림차순)으로 정렬해 10개의 문서만 받아오기
      // const first = query(collectionRef, 
      //   orderBy("postDate"), 
      //   limit(5));
      
      // const documentSnapshots = await getDocs(first);
      // console.log('documentSnapshots : ', documentSnapshots.docs);

      // // 마지막 문서 스냅샷 기억해해두기 (쿼리결과 스냅샷 크기 - 1 = 마지막 문서 위치)
      // const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

      // // 앞서 기억해둔 문서값으로 새로운 쿼리 요청 
      // const next = query(collectionRef,
      //   orderBy("postDate"),
      //   startAfter(lastVisible),
      //   limit(5));

      // console.log('next : ', next);


      // storage에 이미지 파일 업로드
      const realImgList: string[] = [];


      const promiseTest = imgList.map((img) => {
        for (const fileName in img) {
          const imageRef = storageRef(storage, `images/${fileName}`);
          const uploadTask = uploadBytesResumable(imageRef, img[fileName]);

          // 이 then처리가 엄청 느리게 시작된다.
          return uploadTask.then(async (snapshot) => {
            await getDownloadURL(snapshot.ref).then((downloadURL) => {
              console.log('downloadURL : ', downloadURL);
              realImgList.push(downloadURL);
            })
          });
        }
      });


      const results = await Promise.all(promiseTest);
      console.log('results : ', results);
      console.log('프로미스 테스트 : ', promiseTest);
      console.log('realImgList is ', realImgList);
      try {
        console.log('firestore recentPost 추가 시작');
        const docRef = await addDoc(collection(firestoreDB, "recentPost"), {
          nickname: props.nickname,
          imageList: realImgList,
          comment: commentRef.current?.value,
          tag: tag,
          postDate: todayToString,
          replyList: [],
        });
        console.log('firestore recentPost 추가 완료');
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      await console.log('post 등록 완료');

      // // 2. table: Contribution
      await get(child(ref(db), 'contribution/'+ nickname)).then((snapshot) => {
        if (snapshot.exists()){
          const data = snapshot.val();
          if (data[todayToString]){
            data[todayToString].post++;
            
            set(ref(db, 'contribution/' + nickname), data);
          } else {
            data[todayToString] = {
              record: 0,
              post: 1,
            };

            set(ref(db, 'contribution/' + nickname), data);
          }
        } else {
          set(ref(db, 'contribution/' + nickname), {
            [todayToString]: {
              record: 0,
              post: 1,
            }
          });
        }
      });
    }

    document.querySelector('body')?.style.removeProperty('background-color');
    setShowRecordModal(false);
  };

  return (
    <S.Container isRecord={isRecordMode}>
      <S.Header>
        <S.Title>
          {`${today.toLocaleDateString()} `} {isRecordMode ? '기록하기' : '공유하기'}
        </S.Title>
        <S.CloseModalButton onClick={() => {
          document.querySelector('body')?.style.removeProperty('background-color');
          setShowRecordModal(false)
        }}/>
        <ToggleButton onClick={setIsRecordMode} recordMode={isRecordMode}/>
      </S.Header>

      <S.Form method='post' onSubmit={submitHandler}>
        {isRecordMode 
          ? <TodayMarker state={marker} marker={setMarker}/> 
          : <>
              <TagDropdown tag={setTag} />
              <ImageUploader imgList={setImgList} imgNameList={setImgNameList} />
            </>}

        Comment
        <S.ContributionLabel htmlFor="contribution">
          <S.Comment id="contribution" ref={commentRef}/>
        </S.ContributionLabel>

        <S.ErrorMessage>
          {(errorMessage.markerError.length > 0 && errorMessage.markerError) || (errorMessage.imageListError.length > 0 && errorMessage.imageListError) || (errorMessage.commentError.length > 0 && errorMessage.commentError)}
        </S.ErrorMessage>
        
        {/* 
        {isEditMode[0] ?
          <>
            <S.EditButton type="submit" onClick={editHandler} >수정</S.EditButton>
            <S.RemoveButton type="submit" onClick={removeHandler} >삭제</S.RemoveButton>
          </>
        : <S.SubmitButton type="submit">등록</S.SubmitButton>
        } */}
        <S.SubmitButton type="submit">등록</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};
export default RecordModal;
