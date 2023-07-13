import styled, { keyframes } from "styled-components";

import defaultImg from '../../../assets/default-heart.png';
import likeImg from '../../../assets/filled-heart.png';
import replyImg from '../../../assets/chat-bubble.png';


interface LikeButtonProps {
  isLike: boolean;
}

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const CarouselSection = styled.section`
  // margin-right: 12px;
`;


export const PostInfo = styled.section`
  display: flex;
  flex-direction: column;
  // padding-left: 16px;
  padding: 8px 16px;
  background: white;
  border: 1px solid gray;
  // border-radius: 0 12px 12px 0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
  margin: 0 10px 4px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const likeAction = keyframes`
  50% {
    transform: scale(1.3, 1.3);
  }
`;

export const LikeButton = styled.button<LikeButtonProps>`
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

export const ReplyInputLabel = styled.label`
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
  margin: 4px 0 10px 10px;
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

