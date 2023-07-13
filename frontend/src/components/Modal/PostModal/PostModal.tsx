import React, { ReactNode, useEffect, useRef, useState } from 'react';

import * as S from './PostModal.styles';
import Carousel from '../../Carousel/Carousel';
import ReplyList from '../../ReplyList/ReplyList';
import UserThumbnail from '../../UserThumbnail/UserThumbnail';
import { PostProps } from '../../PostList/Post/Post';

interface PostModalProps {
  data?: PostProps;
}

import img1 from '../../../assets/carousel/welsh.jpeg';
import img2 from '../../../assets/carousel/welsh2.jpeg';
import img3 from '../../../assets/carousel/cutedog1.jpeg';
import Reply from '../../ReplyList/Reply/Reply';

const mockData = {
  nickname: 'tester',
  imgList: [img3, img1, img2],
  replyList: [{
      nickname: 'tester1',
      content: '댓글 테스트1',
    }, {
      nickname: 'tester1',
      content: '댓글 테스트2',
    }, {
      nickname: 'tester1',
      content: '댓글 테스트3',
    }, {
      nickname: 'tester1',
      content: '댓글 테스트4',
    }
  ],
  tag: '휴식',
  likes: 3,
  comment: 'Post Modal test',
  postDate: '2023-05-25',
}

const PostModal = (props: PostModalProps) => {
  const [replyList, setReplyList] = useState<ReactNode[]>([]);
  const [showAddReplyButton, setShowAddReplyButton] = useState(false);
  const replyInputRef = useRef<HTMLInputElement>(null);

  const replyInputHandler = () => {
    if (
      replyInputRef.current?.value !== null &&
      replyInputRef.current!.value.length > 0
    ) {
      setShowAddReplyButton(true);
    } else {
      setShowAddReplyButton(false);
    }
  };

  useEffect(() => {
    const replys = mockData.replyList.map((replyData) => {
      return <Reply />
    });
    setReplyList(replys);
  },[]);

  return (
    <S.Container>
      <S.CarouselSection>
        <Carousel size={350} images={mockData.imgList}/>
      </S.CarouselSection>

      <S.PostInfo>
        <S.UserInfo>
          <UserThumbnail nickname={'tester1'}/>
          {mockData.nickname}
        </S.UserInfo>
        <ReplyList></ReplyList>
      
        {/* like button */}
        <S.ButtonContainer>
          <S.LikeButton
            type="button"
            onClick={() => {
              // setIsLike(!isLike);
            }}
            isLike={true}
          />

          {/* reply button */}
          <S.ReplyButton type="button" onClick={() => {}} />
        </S.ButtonContainer>

        <S.ReplyInputLabel>
          <S.ReplyInput
            onChange={replyInputHandler}
            ref={replyInputRef}
            placeholder="댓글 달기..."
          />
          {showAddReplyButton && (
            <S.AddReplyButton type="button">게시</S.AddReplyButton>
          )}
        </S.ReplyInputLabel>
      </S.PostInfo>
    </S.Container>
  );
}
export default PostModal;