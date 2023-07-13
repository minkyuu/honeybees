import styled, { keyframes } from "styled-components";

import defaultImg from '../../../assets/default-heart.png';
import likeImg from '../../../assets/filled-heart.png';
import replyImg from '../../../assets/chat-bubble.png';
import { Link } from "react-router-dom";

interface LikeButtonProps {
  isLike: boolean;
}

export const Container = styled.div`
  width: 600px;
  box-sizing: border-box;
  // border: 1px solid gray;
  margin: 24px 0 60px;
  padding: 0 75px;
`;

export const Tag = styled.span`
  display: block;
  font-size: 13px;
  font-family: 'Jua', sans-serif;
  margin: 0 0 5px 5px;
`;


export const UserInfo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: black;
  font-weight: bold;
  margin: 0 10px 4px 0;
  text-decoration: none;

  &.active {
    color: #F2BB13;
    text-decoration: underline;
    font-weight: bold;
  }
`;


const likeAction = keyframes`
  50% {
    transform: scale(1.3, 1.3);
  }
`;

export const LikeButton = styled.button<LikeButtonProps>`
  margin: 10px 10px 0 0;
  background: url(${props => props.isLike ? likeImg : defaultImg}) no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  border: none;

  animation: ${props => props.isLike && likeAction} 0.5s 0s;
`;

export const ReplyButton = styled.button`
  background: url(${replyImg}) no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  border: none;
  transform: scaleX(-1);
`;

export const Section = styled.section`
  margin: 12px 0;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 15px;
`;

export const Comment = styled.p`
  margin: 0;
  width: 380px;
  height: 20px;
  // border: 1px solid gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ReplyLabel = styled.label`
  position: relative;
  display: block;
  width: 450px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 12px;
`;
  
export const ReplyInput = styled.input`
  border: none;
  // border: 1px solid gray;
  border-bottom: 1px solid gray;
  width: 430px;
  height: 30px;
  box-sizing: border-box;
  margin: 4px 0 0 10px;
  margin-left: 10px;
  outline: none;
`;

export const AddReplyButton = styled.button`
  position: absolute;
  top: 11px;
  right: 12px;
  background: transparent;
  border: none;
  color: #0D8BD9;
  font-weight: bold;
  cursor: pointer;
`;