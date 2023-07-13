import React from 'react';

import * as S from './UserNav.styles';

const UserNav = () => {
  return (
    <S.Container>
      <S.NavTab to='' className={({isActive}) => "nav-link" + (isActive? "a" : "")} end>나의 활동들</S.NavTab>
      {/* <S.Separator>|</S.Separator> */}
      <S.NavTab to='post' className={({isActive}) => "nav-link" + (isActive? "a" : "")} end>게시물</S.NavTab>
    </S.Container>
  );
}

export default UserNav;