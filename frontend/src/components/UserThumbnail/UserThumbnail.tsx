import React, { useEffect, useState } from 'react';

import * as S from './UserThumnail.styles';
import { firestoreDB } from '../../firebase.config';
import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore';

import defaultProfileImg from '../../assets/profile.png';

const UserThumbnail = ({nickname} : {nickname: string}) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  // 프로필 이미지 가져오기
  const getProfileImage = async () => {
    // setIsLoading(true);
    // 첫번째 post 컬렉션의 스냅샷을 작성날짜 기준 내림차순 (orderBy 2번째 인자 생략시 기본 내림차순)으로 정렬해 10개의 문서만 받아오기

    const documentSnapshots = await getDoc(doc(collection(firestoreDB, 'profileImg'), nickname));
    if (!documentSnapshots.exists()){
      // setIsLoading(false);
      setImgSrc(defaultProfileImg);
      return;
    } else {
      console.log('profile img 경로 : ', documentSnapshots.data());
      // setImgSrc(documentSnapshots.data);
    }
  };

  useEffect(() => {
    getProfileImage();
  }, []);

  return (
    <S.UserImage src={imgSrc}/>
  );
}
export default UserThumbnail;