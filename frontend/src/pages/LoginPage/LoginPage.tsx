import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // id, pw 유효성 검사

    // 서버에 요청해야 하나, 그냥 데이터 가져오기로 변경
    // GET - 사용자 정보 가져오기
    // id, password 비교

    // 실패 시 - 에러 메시지


    // 성공 시 - 로그인 정보 전역 상태에 저장 + 메인 페이지로 redirect

  };

  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>HoneyBees 🐝</h2>
      <form className={styles.loginInfo}>
        <input
          type="text"
          className={`${styles.input} ${styles.error}`}
          placeholder="아이디를 입력해주세요."
        />
        <input
          type="password"
          className={`${styles.input} ${styles.error}`}
          autoComplete="off"
          placeholder="비밀번호를 입력해주세요."
        />
      </form>
      <button type="submit" className={styles.button} onClick={loginHandler}>
        로그인
      </button>
      <button type="button" className={styles.button} onClick={() => {}}>
        Google 계정으로 로그인
      </button>
      <div className={styles.links}>
        <Link to="/find-id">아이디 찾기</Link>
        <Link to="/find-password">비밀번호 찾기</Link>
        <Link to="/register">회원가입</Link>
      </div>
    </div>
  );
};

export default LoginPage;
