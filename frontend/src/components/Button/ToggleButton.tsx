import React, { Dispatch, SetStateAction } from 'react';

import * as S from './ToggleButton.styles';

interface ToggleButtonProps {
  onClick: Dispatch<SetStateAction<boolean>>;
  recordMode: boolean;
}

const ToggleButton = (props: ToggleButtonProps) => {
  
  const switchMode = () => {
    props.onClick(!props.recordMode);
  };

  return (
    <S.ToggleContainer>
      <S.ToggleCheckBox type="checkbox" id="toggle" hidden/>
      <S.ToggleSwitch htmlFor='toggle' onClick={switchMode}>
        <S.ToggleButton />
      </S.ToggleSwitch>
    </S.ToggleContainer>
  );
}

export default ToggleButton;