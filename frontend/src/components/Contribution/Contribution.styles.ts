import styled from 'styled-components';

interface ColorRectProps {
  level: number;
}

export const Container = styled.div`
  margin: 70px 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export const NavButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const PrevYearImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const NextYearImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const Body = styled.div`
  width: 710px;
  height: 215px;
  border: 1px solid gray;
  border-radius: 12px;
`;

export const CalendarContainer = styled.div`
  position: relative;
  display: flex;
  overflow-x: auto;
  flex-direction: column;
`;

export const ColorInfo = styled.div`
  position: sticky;
  width: 115px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 12px;
  margin: 10px 30px 0 auto;
`;

export const ColorRectContainer = styled.span`
  line-height: 12px;
`;

const getRectBackgroundColor = (level: number): string => {
  let result = '';

  switch (level) {
    case 1:
      result = '#edcc66';
      break;
    case 2:
      result = '#edc343';
      break;
    case 3:
      result = '#d3a824';
      break;
    case 4:   
      result = '#c7980c';
      break;
    default:
      result = 'rgb(235, 237, 240)';
  }
  
  return result;
};

export const ColorRect = styled.span<ColorRectProps>`
  display: inline-block;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  margin: 1px;
  border: 1px solid rgba(27, 31, 35, 0.06);
  border-radius: 2px;

  background-color: ${(props) => getRectBackgroundColor(props.level)};
`;
