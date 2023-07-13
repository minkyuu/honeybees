import { MouseEventHandler } from 'react';

import * as S from './Button.styles';

interface Props {
  children: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = (props: Props) => {
  return (
    <S.Button onClick={props.onClick}>
      {props.children}
    </S.Button>
  );
}
export default Button;