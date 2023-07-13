import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Profile.styles';

import profile from '../../assets/profile.png'

interface ProfileProps {
  nickname: string;
}

const Profile = (props: ProfileProps) => {
  return (
    // <Link to={`/${userId}`}>
    <S.Profile to={`/${props.nickname}`}>
      <S.ProfileImg src={profile} alt='프로필'/>
    </S.Profile>
  );
}

export default Profile;