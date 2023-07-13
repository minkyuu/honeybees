import React, { ReactNode } from 'react';

import * as S from './MovePrevButton.styles';
import { useNavigate } from 'react-router-dom';

interface MovePrevButtonProps {
  children: ReactNode;
}

const MovePrevButton: React.FC<MovePrevButtonProps> = (props) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-2);
  };
  
  return (
    <S.Container>
      <S.Button type='button' onClick={goBack}>{props.children}</S.Button>
    </S.Container>
  );
}
export default MovePrevButton;