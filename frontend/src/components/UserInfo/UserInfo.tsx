import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import { db } from '../../firebase.config';
import { child, get, ref, set } from 'firebase/database';

import defaultProfileImg from '../../assets/profile.png';

import * as S from './UserInfo.styles';
import { useNavigate } from 'react-router-dom';

interface UserInfoProps {
  nickname?: string;
}

const UserInfo = ({nickname}: UserInfoProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [contributionAmount, setContributionAmount] = useState<number>(0);
  const navigate = useNavigate();

  const sessionId = sessionStorage.getItem('SESSION_ID');

  // 로그인 안 한 회원인 경우 -> explore 화면으로 이동
  useEffect(() => {
    get(child(ref(db), 'session/' + sessionId)).then((snapshot) => {
      if (snapshot.exists()) {
        if (snapshot.val().nickname === nickname) {
          setIsAuthenticate(true);
        }
      }
    });

    let amount = 0;
    get(child(ref(db), 'record/' + nickname)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        for (const recordDate in data) {
          amount += data[recordDate].length;
        }
        setContributionAmount(contributionAmount + amount);
      }
    }).then(() => {
      get(child(ref(db), 'post/' + nickname)).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          for (const recordDate in data) {
            amount += data[recordDate].length;
          }
          setContributionAmount(contributionAmount + amount);
        }
      });
    });

    setIsLoading(false);
  },[]);

  // 해당 유저 닉네임의 데이터를 가져오기
  const getUserInfo = () => {
    return get(child(ref(db), 'nickname/'+ nickname)).then((snapshot) => {
      if (snapshot.exists()){
        return snapshot.val();
      }
    });
  }

  const queryResult = useQuery('@getUserInfo', getUserInfo, {
    staleTime: 6000 * 60
  });
  const userData = queryResult.data;
  

  const editProfileHandler = () => {
    navigate('edit', {
      state: {
        nickname: nickname
      }
    })
  }

  // 유저 정보 확인 후 record, post 데이터 가져오기

  return (
    <S.Container>
      <S.Header>
        <S.ImageSection>
          <S.UserProfileImage
            src={
              userData?.userInfo.profileImg === ''
                ? defaultProfileImg
                : userData?.userInfo.profileImg
            }
          />
        </S.ImageSection>

        <S.IntroductionSection>
          <S.Section1>
            <S.UserNickname>{nickname}</S.UserNickname>
            {isAuthenticate 
              ? <S.EditProfileButton onClick={editProfileHandler}>프로필 편집</S.EditProfileButton>
              : <S.FollowButton>팔로우</S.FollowButton>
            }
          </S.Section1>
          <S.UserIntroduction>introduction{userData?.userInfo.introduction}</S.UserIntroduction>
        </S.IntroductionSection>
      </S.Header>
      
      <S.InfoSection>
        <S.Info>
          Contribution
          <S.InfoValue>{contributionAmount}</S.InfoValue>
        </S.Info>
        <S.Info>
          Follower
          <S.InfoValue>
            {userData?.userInfo.follower}
          </S.InfoValue>
        </S.Info>
        <S.Info>
          Follow
          <S.InfoValue>
            {userData?.userInfo.follow}
          </S.InfoValue>
        </S.Info>
      </S.InfoSection>
    </S.Container>
  );
};
export default UserInfo;
