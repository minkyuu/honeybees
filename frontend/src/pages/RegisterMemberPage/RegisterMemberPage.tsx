import { useState, useRef } from 'react';

import { REGISTER_ERROR_MESSAGE } from '../../constants/processMessage';
import styles from './RegisterMemberPage.module.css';

import axios from 'axios';

interface Member {
  id: string,
  nickName: string,
  password: string,
}

interface ErrorMessage {
  null: string,
  id: string,
  nickName?: string,
  password?: string,
  passwordChecker?: string,
}

const initMessage: ErrorMessage = {
  null: '',
  id: '',
  nickName: '',
  password: '',
  passwordChecker: '',
};

const RegisterMemberPage = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const nickNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isValidId, setIsValidId] = useState(true);
  const [isValidNickName, setIsValidNickName] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [passwordChecker, setPasswordChecker] = useState(true);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(initMessage);

  const isInputNull = (input: string): boolean => {
    if (input.length === 0) {
      return true;
    }
    return false;
  };

  const validateId = (id: string): boolean => {
    const idRegex = /[^a-zA-Z0-9]/g;

    if (id.match(idRegex)) {
      return false;
    }

    return true;
  }

  const isDuplicateId = async (id: string): Promise<boolean> => {
    // GET 요청 - DB에 동일 ID 존재 여부 체크
    // const response = await axios('https://honeybees-db-default-rtdb.firebaseio.com/member.json');

    return true;
  };

  
  const checkDuplicateId = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateId(e.target.value)) {
      setIsValidId(false);

      errorMessage.id = REGISTER_ERROR_MESSAGE.INVALIDATE_ID
      setErrorMessage({...errorMessage});
      return;
    }
    
    if (!isDuplicateId(e.target.value)) {
      setIsValidId(false);

      errorMessage.id = REGISTER_ERROR_MESSAGE.DUPLICATE_ID;
      setErrorMessage({...errorMessage});
      return;
    } 
    
    setIsValidId(true);

  };


  const validateNickName = (nickName: string): boolean => {
    const nickNameRegex = /[^a-zA-Zㄱ-ㅎ가-힣0-9\_\-]/g;

    if (nickName.match(nickNameRegex)) {
      return false;
    }

    return true;
  };

  const isDuplicateNickname = (nickName: string) => {
    // GET 요청 - DB에 동일 닉네임 존재 여부 체크

  };

  const checkDuplicateNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateNickName(e.target.value)) {
      setIsValidNickName(false);

      errorMessage.nickName = REGISTER_ERROR_MESSAGE.INVALIDATE_NICKNAME;
      setErrorMessage({...errorMessage});
      return;
    }

    if (!isDuplicateNickname) {
      setIsValidNickName(false);

      errorMessage.nickName = REGISTER_ERROR_MESSAGE.DUPLICATE_NICKNAME;
      setErrorMessage({...errorMessage});
      return;
    }

    setIsValidNickName(true);
  }

  const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[~!@#$%^&*-]).{8,16}$/
    if (e.target.value.length < 8 || e.target.value.length > 16) {
      setIsValidPassword(false);
      errorMessage.password = REGISTER_ERROR_MESSAGE.TOO_SHORT_OR_TOO_LONG_PASSWORD;
      setErrorMessage({...errorMessage});
      return;
    }

    if (!passwordRegex.test(e.target.value)){
      setIsValidPassword(false);

      errorMessage.password = REGISTER_ERROR_MESSAGE.INVALIDATE_PASSWORD;
      setErrorMessage({...errorMessage});
      return;
    }

    setIsValidPassword(true);
  }

  const doubleCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (passwordRef.current && e.target.value.length === passwordRef.current.value.length){
      if (e.target.value !== passwordRef.current.value) {
        setPasswordChecker(false);
        errorMessage.passwordChecker = REGISTER_ERROR_MESSAGE.NOT_EQUAL_PASSWORD;
        setErrorMessage({...errorMessage});
        return;
      }
      setPasswordChecker(true);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidId && isValidNickName && isValidPassword) {
      if (idRef.current && nickNameRef.current && passwordRef.current){
        const newMember: Member = {
          id: idRef.current.value,
          nickName: nickNameRef.current.value, 
          password: passwordRef.current.value,
        }

        // POST 요청 - DB에 회원 등록


      }
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>HoneyBees 🐝</h2>
      <form className={styles.registerForm}>
        <input
          type="text"
          className={`${styles.input} ${!isValidId && styles.error}`}
          placeholder="아이디를 입력해주세요."
          ref={idRef}
          onChange={checkDuplicateId}
        />
        {!isValidId && <span className={styles.errorMessage}>{errorMessage.id}</span>}
        <input
          type="text"
          className={`${styles.input} ${!isValidNickName && styles.error}`}
          placeholder="닉네임을 입력해주세요."
          ref={nickNameRef}
          onChange={checkDuplicateNickName}
        />
        {!isValidNickName && <span className={styles.errorMessage}>{errorMessage.nickName}</span>}
        <input
          type="password"
          className={`${styles.input} ${!isValidPassword && styles.error}`}
          placeholder="비밀번호를 입력해주세요."
          ref={passwordRef}
          autoComplete="off"
          onChange={validatePassword}
        />
        {!isValidPassword && <span className={styles.errorMessage}>{errorMessage.password}</span>}
        <input
          type="password"
          className={`${styles.input} ${!passwordChecker && styles.error}`}
          placeholder="비밀번호를 한 번 더 입력해주세요."
          autoComplete="off"
          onChange={doubleCheckPassword}
        />
        {!passwordChecker && <span className={styles.errorMessage}>{errorMessage.passwordChecker}</span>}
        <button type="button" className={styles.submitButton} onClick={handleSubmit}>회원가입</button>
      </form>
    </div>
  );
}

export default RegisterMemberPage;