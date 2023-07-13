import styled from 'styled-components';

import smile from '../../assets/smile-bee.jpeg';
import good1 from '../../assets/marker/bee1.png';
import good2 from '../../assets/marker/bee2.png';
import good3 from '../../assets/marker/bee3.png';
import good4 from '../../assets/marker/bee4.png';
import good5 from '../../assets/marker/bee5.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 550px;
  height: 80px;
  border: 1px solid gray;
  border-radius: 12px;
  margin-bottom: 88px;
`;

const getImgSrc = (marker: string) => {
  let result = '';
  switch(marker) {
    case 'good1':
      result = good1;
      break;
    case 'good2':
      result = good2;
      break;
    case 'good4':
      result = good4;
      break;
    case 'good5':
      result = good5;
      break;
    default:
      result = good3;
  }
  return result;
}

interface MarkerProps {
  marker: string;
  curState: boolean;
}

export const MarkerLabel = styled.label<MarkerProps>`
  background: url(${props => getImgSrc(props.marker)}) no-repeat;
  background-position: center;
  background-size: contain;
  width: 40px;
  height: 40px;
  border: ${props => props.curState ? '1.5px solid #f2bb13;' : '1px solid #F2F2F2'};
  border-radius: 50%;
  ${props => props.curState && 'box-shadow: 0 0 10px 5px #f2bb13;'}
`;

export const Marker = styled.input`
  // appearance: none;
  display: none;

  &:checked + label{
    border: 1.5px solid #f2bb13;
    box-shadow: 0 0 10px 5px #f2bb13;
  }
`;