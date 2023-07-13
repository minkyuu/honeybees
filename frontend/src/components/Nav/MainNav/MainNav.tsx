import * as S from './MainNav.styles';

const MainNav = () => {
  return (
    <S.Container>
      <S.NavTab to='my' className={({isActive}) => "nav-link" + (isActive? "a" : "")}>My</S.NavTab>
      <S.Separator>|</S.Separator>
      <S.NavTab to='' className={({isActive}) => "nav-link" + (isActive? "a" : "")} end>Explore</S.NavTab>
    </S.Container>
  );
}
export default MainNav;