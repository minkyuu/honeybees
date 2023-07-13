import MovePrevButton from '../../components/Button/MovePrevButton';
import * as S from './ErrorPage.styles';

export default function ErrorPage() {
  return (
    <S.Container>
      <S.ErrorMessage>404 Error</S.ErrorMessage>
      <MovePrevButton>이전 페이지로 돌아가기</MovePrevButton>
    </S.Container>
  );
}