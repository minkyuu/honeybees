import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { child, get, ref, set } from 'firebase/database';
import { db } from '../../firebase.config';

import styles from './LoginPage.module.css';
import { useRef } from 'react';
import { LOGIN_ERROR_MESSAGE } from '../../constants/processMessage';
import { useMutation } from 'react-query';

import { GoogleLogin } from '@react-oauth/google';

interface ErrorMessage {
  id: string;
  password: string;
  authentication: string;
}

const initMessage: ErrorMessage = {
  id: '',
  password: '',
  authentication: '',
};

interface SessionInfo {
  uuid: string;
  id: string;
  nickname: string;
}

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(initMessage);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const sessionId = sessionStorage.getItem('SESSION_ID');

  useEffect(() => {
    get(child(ref(db), 'session/' + sessionId)).then((snapshot) => {
      if (snapshot.exists()) {
        navigate('/main');
      }
    });
  },[]);


  // 세션 하이재킹에 대한 내용 : SSL (https://stir.tistory.com/193)
  const loginMember = async (sessionInfo: SessionInfo) => {
    console.log('login 처리, 세션 등록');
    await set(ref(db, `session/${sessionInfo.uuid}`), {
      id: sessionInfo.id,
      nickname: sessionInfo.nickname,
    });
  };

  const mutation = useMutation(loginMember);

  const login = (
    idRef: React.RefObject<HTMLInputElement>,
    passwordRef: React.RefObject<HTMLInputElement>
  ) => {
    get(child(ref(db), `member/${idRef.current?.value}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const member = snapshot.val();

        if (member.password === passwordRef.current!.value) {
          let uuid = crypto.randomUUID();

          // 서버(데이터베이스)에는 session id : member 정보 저장
          mutation.mutate({
            uuid: uuid,
            id: member.id,
            nickname: member.nickname,
          });

          // 클라이언트는 session id 저장
          sessionStorage.setItem('SESSION_ID', uuid);

          navigate('/main', {state: {
            nickname: member.nickname
          }});
        } else {
          errorMessage.authentication =
            LOGIN_ERROR_MESSAGE.PASSWORD_AUTHENTICATE_ERROR;
          setErrorMessage({ ...errorMessage });
          passwordRef.current?.focus();
        }
      } else {
        errorMessage.authentication = LOGIN_ERROR_MESSAGE.ID_AUTHENTICATE_ERROR;
        setErrorMessage({ ...errorMessage });
        idRef.current?.focus();
      }
    });
  };

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    
    errorMessage.id = '';
    errorMessage.password = '';
    errorMessage.authentication = '';
    
    // id, pw 유효성 검사
    const regex = /[~!@#$%^&*_-]/;
    
    if (idRef.current!.value.length === 0) {
      errorMessage.id = LOGIN_ERROR_MESSAGE.ID_INPUT_NULL;
      setErrorMessage({ ...errorMessage });
      idRef.current?.focus();
      return;
    }
    
    if (passwordRef.current!.value.length === 0) {
      errorMessage.password = LOGIN_ERROR_MESSAGE.PASSWORD_INPUT_NULL;
      setErrorMessage({ ...errorMessage });
      passwordRef.current?.focus();
      return;
    }

    // 로그인 처리 (백엔드 붙이면 변경 필요 -> 함수 추출)
    login(idRef, passwordRef);
  };

  // const isAuthenticated = () => {
  //   if (sessionStorage.getItem('SESSION_ID') !== null) {
  //     navigate('/main');
  //   }
  // };

  // isAuthenticated();

  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>HoneyBees 🐝</h2>
      <form className={styles.loginInfo}>
        <input
          type="text"
          className={`${styles.input} ${
            errorMessage.id.length > 0 && styles.error
          }`}
          ref={idRef}
          autoComplete="off"
          placeholder="아이디를 입력해주세요."
          onKeyDown={(e) => e.key === 'Enter' && loginHandler(e)}
        />
        {errorMessage.id.length > 0 && (
          <span className={styles.errorMessage}>{errorMessage.id}</span>
        )}
        <input
          type="password"
          className={`${styles.input} ${
            errorMessage.password.length > 0 && styles.error
          }`}
          autoComplete="off"
          ref={passwordRef}
          placeholder="비밀번호를 입력해주세요."
          onKeyDown={(e) => e.key === 'Enter' && loginHandler(e)}
        />
        {errorMessage.password.length > 0 && (
          <span className={styles.errorMessage}>{errorMessage.password}</span>
        )}
      </form>
      <span
        className={`${styles.authentication} ${
          errorMessage.authentication.length > 0 && styles.errorMessage
        }`}
      >
        {errorMessage.authentication}
      </span>

      <button
        type="submit"
        className={styles.loginButton}
        onClick={loginHandler}
      >
        로그인
      </button>
      <GoogleLogin
        onSuccess={(res) => {
          console.log(res);
          navigate('/main');
        }}
        onError={() => {console.log('소셜 로그인 error');}}
        width="300"
      />
      <div className={styles.links}>
        <Link className={styles.link} to="/find-id">
          아이디 찾기
        </Link>
        <span className={styles.separator}>|</span>
        <Link className={styles.link} to="/find-password">
          비밀번호 찾기
        </Link>
        <span className={styles.separator}>|</span>
        <Link className={styles.link} to="/register">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
