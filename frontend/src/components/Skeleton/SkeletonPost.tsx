import * as S from './SkeletonPost.styles';

const SkeletonPost = () => {
  return (
    <S.Container>
      <S.User>
        <S.UserThumbnail />
        <S.UserInfo>
          <S.Tag/>  
          <S.Nickname />
        </S.UserInfo>
      </S.User>
      <S.Carousel/>
    </S.Container>
  );
};

export default SkeletonPost;