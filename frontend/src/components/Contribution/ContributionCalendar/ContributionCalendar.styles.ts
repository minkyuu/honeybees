import styled from 'styled-components';

export const Graph = styled.div`
  width: 900px;
  margin-top: 12px;
`;

export const Calendar = styled.table`
  border-spacing: 4px;
  font-size: 12px;
  margin: 10px 14px;
  overflow: auto;
  white-space: nowrap;
`;

export const CalendarRow = styled.tr`
  height: 12px;
  box-sizing: border-box;
`;

export const CalendarDayLabel = styled.td`
  width: 12px;
  padding: 0;
  font-size: 12px;
`;

export const CalendarDay = styled.td`
  width: 12px;
  background-color: rgb(235, 237, 240);
  border: 1px solid rgba(27, 31, 35, 0.06);
  border-radius: 2px;
  font-size: 0;
  box-sizing: border-box;
`;

export const ColorInfo = styled.div`
  width: 115px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 12px;
  margin-top: 4px;
`;

export const ColorRectContainer = styled.span`
  line-height: 12px;
`;

export const ColorRect = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  margin: 1px;
  border: 1px solid rgba(27, 31, 35, 0.06);
  border-radius: 2px;
`;

