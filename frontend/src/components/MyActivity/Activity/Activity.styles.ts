import styled from "styled-components";

import {Button} from "../../Button/Button.styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 628px;
  height: 48px;
  border: 1px solid gray;
  border-radius: 12px;
`;

export const Date = styled.span`
  width: 100px;
  margin-left: 29px;
`;

export const Marker = styled.img`
  margin: 0 14px;
  width: 32px;
  height: 32px;
  border: 1px solid gray;
  border-radius: 50%;
`;

export const ContributionCount = styled.span`
  margin-left: 16px;
`;


export const EditButton = styled(Button)`
  width: 68px;
  height: 24px;
  border-radius: 12px;
  font-size: 12px;
  margin-left: 258px;
  border: 1px solid rgba(27, 31, 35, 0.07);
  cursor: pointer;
`;