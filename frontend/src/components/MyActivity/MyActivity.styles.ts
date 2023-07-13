import styled from "styled-components";

export const Container = styled.div`
  width: calc((100vw * 3 / 7));
`;

export const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

export const ActivitySection = styled.section`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
  /* width: 710px; */
  min-height: 200px;
  border: 1px solid gray;
  border-radius: 14px;
`;