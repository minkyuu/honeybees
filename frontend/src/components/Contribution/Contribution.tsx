import React, { ReactNode, useState, useEffect } from 'react';

import left from '../../assets/left.png';
import right from '../../assets/right.png';

import * as S from './Contribution.styles';
import ContributionCalendar from './ContributionCalendar/ContributionCalendar';
import { getActivities } from '../../apis/recordApi';

const Contribution = ({nickname}: {nickname: string}) => {
  const [activities, setActivities] = useState<ReactNode[]>([]);

  useEffect(() => {
    getActivities(nickname, setActivities);
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Contribution</S.Title>
        <S.NavContainer>
          <S.NavButton><S.PrevYearImg src={left} alt='작년'/></S.NavButton>
          2023
          <S.NavButton><S.NextYearImg src={right} alt='내년'/></S.NavButton>
        </S.NavContainer>
      </S.Header>

      <S.Body>
        <S.CalendarContainer>
          <ContributionCalendar/>
        </S.CalendarContainer>
        <S.ColorInfo>
          Less
          <S.ColorRectContainer>
            <S.ColorRect level={0}/>
            <S.ColorRect level={1}/>
            <S.ColorRect level={2}/>
            <S.ColorRect level={3}/>
            <S.ColorRect level={4}/>
          </S.ColorRectContainer>
          More
        </S.ColorInfo>
      </S.Body>
    </S.Container>
  );
};
export default Contribution;
