import React, { useEffect, useRef, useState } from 'react';

import * as S from './Post.styles';

import Carousel from '../../Carousel/Carousel';
import UserThumbnail from '../../UserThumbnail/UserThumbnail';
import PostModal from '../../Modal/PostModal/PostModal';

type Reply = {
  nickname: string;
  content: string;
}

export interface PostProps {
  nickname: string;
  imgList: Array<string>;
  tag?: string;
  likes?: number;
  comment: string;
  postDate: string;
  replyList: Reply[];
}

const Post = ({ postData }: { postData: PostProps }) => {
  const [isLike, setIsLike] = useState(false);
  const [openPostModal, setOpenPostModal] = useState(false);
  const [showAddReplyButton, setShowAddReplyButton] = useState(false);
  const replyInputRef = useRef<HTMLInputElement>(null);

  const openThisPost = () => {
    console.log('post 모달 열기');
    setOpenPostModal(!openPostModal);
  };

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

  const addReply = (e: React.MouseEvent) => {
    e.preventDefault();


  };

  return (
    <>
      <S.Container>
        {postData.tag && postData.tag !== '' && <S.Tag>{`# ${postData.tag}`}</S.Tag>}
        <S.UserInfo to={`/${postData.nickname}`}>
          <UserThumbnail nickname={postData.nickname} />
          {postData.nickname}
        </S.UserInfo>
        {/* carousel */}
        <Carousel size={postData.imgList.length} images={postData.imgList} />

        {/* like button */}
        <S.LikeButton
          type="button"
          onClick={() => {
            setIsLike(!isLike);
          }}
          isLike={isLike}
        />

        {/* reply button */}
        <S.ReplyButton type="button" onClick={openThisPost} />

        {/* post 내용 (= comment) */}
        <S.Section>
          <S.UserInfo to={`/${postData.nickname}`}>{postData.nickname}</S.UserInfo>
          <S.Comment>{postData.comment}</S.Comment>
        </S.Section>

        {/* reply input */}
        <S.ReplyLabel>
          <S.ReplyInput
            onChange={replyInputHandler}
            ref={replyInputRef}
            placeholder="댓글 달기..."
          />
          {showAddReplyButton && (
            <S.AddReplyButton type="button" onClick={addReply}>게시</S.AddReplyButton>
          )}
        </S.ReplyLabel>
      </S.Container>
      {openPostModal && <PostModal data={postData} />}
    </>
  );
};

export default Post;
