import styled, { keyframes } from "styled-components";

import defaultImg from '../../assets/default-heart.png';
import likeImg from '../../assets/filled-heart.png';
import replyImg from '../../assets/chat-bubble.png';

export const Container = styled.div`
  width: 600px;
  // height: 1200px;
  // border: 1px solid gray;
`;

const spinAction = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  margin: 0 auto;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255,255,255,.1);
  border-top: 4px dotted orange;
  border-right: 4px dotted orange;
  border-radius: 50%;
  animation: ${spinAction} 1s linear infinite;
`;

export const Observer = styled.div`
  // margin: 0 auto;
  // width: 20px;
  height: 30px;
  visibility: hidden;
`;


// const likeAction = keyframes`
//   50% {
//     transform: scale(1.3, 1.3);
//   }
// `;

// export const LikeButton = styled.button<LikeButtonProps>`
//   margin: 4px 6px 0 0;
//   background: url(${props => props.isLike ? likeImg : defaultImg}) no-repeat;
//   background-size: contain;
//   width: 20px;
//   height: 20px;
//   border: none;

//   animation: ${props => props.isLike && likeAction} 0.5s 0s;
// `;

// export const ReplyButton = styled.button`
//   background: url(${replyImg}) no-repeat;
//   background-size: contain;
//   width: 20px;
//   height: 20px;
//   border: none;
//   transform: scaleX(-1);
// `;

// export const Comment = styled.p`
//   width: 250px;
//   height: 20px;
//   border: 1px solid gray;
// `;

// export const ReplyLabel = styled.label`
//   position: relative;
//   display: block;
//   width: 250px;
//   height: 35px;
//   border: 1px solid gray;
//   border-radius: 12px;
// `;

// export const ReplyInput = styled.input`
//   border: none;
//   border-bottom: 1px solid gray;
//   width: 225px;
//   height: 28px;
//   margin-left: 10px;
//   outline: none;
// `;

// export const AddReplyButton = styled.button`
//   position: absolute;
//   top: 7px;
//   right: 10px;
//   background: transparent;
//   border: none;
//   color: #0D8BD9;
//   font-weight: bold;
//   cursor: pointer;
// `;