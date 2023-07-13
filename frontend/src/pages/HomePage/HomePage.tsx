import bee from '../../assets/bee.png';

import * as S from './HomePage.styles';

export default function HomePage() {
  return (
    <S.Container>
      <S.HoneyBees>HoneyBees</S.HoneyBees>
      <S.WelcomeComment><S.Comment>Welcome to Honeybees! 🐝</S.Comment></S.WelcomeComment>
      <S.WelcomeImage src={bee} alt="꿀벌"/>
      <S.LinkContainer>
        <S.PageLink to="/main">둘러보기</S.PageLink>
        <S.PageLink to="/login">시작하기</S.PageLink>
      </S.LinkContainer>
    </S.Container>
  );
}
