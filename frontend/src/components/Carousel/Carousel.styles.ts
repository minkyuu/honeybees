import styled from 'styled-components';

import leftArrow from '../../assets/left.png';
import rightArrow from '../../assets/right.png';

interface WindowProps {
  position: number | undefined;
}

interface DotIndicatorProps {
  // className?: string;
  current?: boolean;
}

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 450px;
  overflow: hidden;
`;

export const Window = styled.div<WindowProps>`
  display: flex;
  transform: translateX(${props => props.position}px);

  transition: all 0.2s;
`;

export const ImageContainer = styled.div`
  width: 450px;
  height: 450px;
`;

export const Image = styled.img`
  width: ${props => props.width+'px' || '100px'};
  height: 450px;
`;

export const DotNav = styled.ul`
  margin: 12px 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 450px;
  position: absolute;
  bottom: 0;
  list-style:none;
  // border: 1px solid red;
`;

export const DotIndicator = styled.li<DotIndicatorProps>`
  width:4px;
  height:4px;
  background: ${props => props.current ? '#E5E6E6': 'green'};
  // background: ${props => props.className?.includes('current') ? '#E5E6E6': 'green'};
  background: #F3F4F4;
  border-radius: 50%;
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 45%;
  left: 4px;
  background: url(${leftArrow}) no-repeat;
  background-color: rgba(253, 248, 216, 0.6);
  background-size: contain;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(253, 248, 216, 0.2);
  border-radius: 50%;
  cursor: pointer;
`;

export const NextButton = styled.button`
  position: absolute;
  top: 45%;
  right: 4px;
  background: url(${rightArrow}) no-repeat;
  background-size: contain;
  background-color: rgba(253, 248, 216, 0.6);
  width: 20px;
  height: 20px;
  border: 1px solid rgba(253, 248, 216, 0.2);
  border-radius: 50%;
  cursor: pointer;
`;
