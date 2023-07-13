import styled from 'styled-components';
import { Button } from '../Button/Button.styles';

export const Container = styled.div`
  margin: 30px 0 70px;
`;

export const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

export const RecordButton = styled(Button)`
  display: block;
  width: 710px;
  height: 75px;
  border-radius: 12px;
  font-size: 18px;
  border: 1px solid rgba(27, 31, 35, 0.1);
  cursor: pointer;
`;
