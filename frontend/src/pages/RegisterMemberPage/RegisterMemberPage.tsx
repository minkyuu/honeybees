import { useState, useRef, useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

import { REGISTER_ERROR_MESSAGE } from '../../constants/processMessage';

import styles from './RegisterMemberPage.module.css';


import { db } from '../../firebase.config';
import { ref, set, child, get } from "firebase/database";
import { Link } from 'react-router-dom';
import useDebounce from '../../utils/useDebounce';

interface Member {
  id: string,
  nickname: string,
  password: string,
}

interface ErrorMessage {
  id?: string,
  nickname?: string,
  password?: string,
  passwordChecker?: string,
}

const initMessage: ErrorMessage = {
  id: '',
  nickname: '',
  password: '',
  passwordChecker: '',
};

const RegisterMemberPage = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  
  const [isValidId, setIsValidId] = useState(false);
  const [isValidNickname, setIsValidNickname] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordChecker, setPasswordChecker] = useState(false);
  
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(initMessage);
  const navigate = useNavigate();
  
  const validateId = (id: string): boolean => {
    const idRegex = /[^a-zA-Z0-9]/g;

    if (id.match(idRegex)) {
      return false;
    }

    return true;
  }
  
  const isDuplicateId = async (id: string) => {
    // GET 요청 - DB에 동일 ID 존재 여부 체크
    let isDuplicate = false;

    await get(child(ref(db), `member/${id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        isDuplicate = true;
      } 
    });

    return isDuplicate;
  };

  const checkDuplicateId = async (e: React.ChangeEvent<HTMLInputElement>) => {
  // const checkDuplicateId = async (id: string) => {
    // console.log('ID 입력값 체크 : ', e.target.value);
    // console.log('ID 입력값 체크 : ', id);
    if (!validateId(e.target.value)) {
    // if (!validateId(id)) {
      setIsValidId(false);
      
      errorMessage.id = REGISTER_ERROR_MESSAGE.INVALIDATE_ID;
      setErrorMessage({...errorMessage});
      return;
    }
    
    let isDuplicate = await isDuplicateId(e.target.value);
    // let isDuplicate = await isDuplicateId(id);
    if (isDuplicate) {
      setIsValidId(false);
      
      errorMessage.id = REGISTER_ERROR_MESSAGE.DUPLICATE_ID;
      setErrorMessage({...errorMessage});
      return;
    } 
    
    setIsValidId(true);

  };


  const validateNickname = (nickname: string): boolean => {
    const nicknameRegex = /[^a-zA-Z0-9\_\-]/g;

    if (nickname.match(nicknameRegex)) {
      return false;
    }

    return true;
  };

  const isDuplicateNickname = async (nickname: string) => {
    // GET 요청 - DB에 동일 닉네임 존재 여부 체크
    let isDuplicate = false;
    
    await get(child(ref(db), `nickname/${nickname}`)).then((snapshot) => {
      if (snapshot.exists()){
        isDuplicate = true;
      }
    });

    return isDuplicate;
  };

  const checkDuplicateNickname = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateNickname(e.target.value)) {
      setIsValidNickname(false);

      errorMessage.nickname = REGISTER_ERROR_MESSAGE.INVALIDATE_NICKNAME;
      setErrorMessage({...errorMessage});
      return;
    }

    let isDuplicate = await isDuplicateNickname(e.target.value);
    if (isDuplicate) {
      setIsValidNickname(false);

      errorMessage.nickname = REGISTER_ERROR_MESSAGE.DUPLICATE_NICKNAME;
      setErrorMessage({...errorMessage});
      return;
    }

    setIsValidNickname(true);
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

  const registerMember = async (memberInfo: Member) => {
    try {
      await set(ref(db, 'member/' + memberInfo.id), {
        id: memberInfo.id,
        nickname: memberInfo.nickname,
        password: memberInfo.password,
      });
      await set(ref(db, 'nickname/' + memberInfo.nickname), {
        id: memberInfo.id,
        userInfo: {
          profileImg: '',
          introduction: '',
          follower: 0,
          follow: 0,
        }
      });
      
      await console.log("가입 성공");
      await navigate('/register-success', {
        state: {
          id: memberInfo.id,
          nickname: memberInfo.nickname
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidId && isValidNickname && isValidPassword) {
      if (idRef.current && nicknameRef.current && passwordRef.current){
        const newMember: Member = {
          id: idRef.current.value,
          nickname: nicknameRef.current.value, 
          password: passwordRef.current.value,
        }

        // POST 요청 - DB에 회원 등록
        registerMember(newMember);
      }
    } else {
      if (!isValidId) {
        errorMessage.id = REGISTER_ERROR_MESSAGE.INPUT_NULL;
        setErrorMessage({...errorMessage});
        idRef.current?.focus();
      } else if (!isValidNickname) {
        errorMessage.nickname = REGISTER_ERROR_MESSAGE.INPUT_NULL;
        setErrorMessage({...errorMessage});
        nicknameRef.current?.focus;
      } else if (!isValidPassword) {
        errorMessage.password = REGISTER_ERROR_MESSAGE.INPUT_NULL;
        setErrorMessage({...errorMessage});
        passwordRef.current?.focus;
      }
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>HoneyBees 🐝</h2>
      <form className={styles.registerForm}>
        <input
          type="text"
          className={`${styles.input} ${(!isValidId && errorMessage.id!.length > 0) && styles.error}`}
          placeholder="아이디를 입력해주세요."
          ref={idRef}
          onChange={checkDuplicateId}
          // onChange={checkIdHandler}
        />
        {(!isValidId && errorMessage.id!.length > 0) && <span className={styles.errorMessage}>{errorMessage.id}</span>}
        <input
          type="text"
          className={`${styles.input} ${(!isValidNickname && errorMessage.nickname!.length > 0) && styles.error}`}
          placeholder="닉네임을 입력해주세요."
          ref={nicknameRef}
          onChange={checkDuplicateNickname}
        />
        {(!isValidNickname && errorMessage.nickname!.length > 0) && <span className={styles.errorMessage}>{errorMessage.nickname}</span>}
        <input
          type="password"
          className={`${styles.input} ${(!isValidPassword && errorMessage.password!.length > 0) && styles.error}`}
          placeholder="비밀번호를 입력해주세요."
          ref={passwordRef}
          autoComplete="off"
          onChange={validatePassword}
        />
        {(!isValidPassword && errorMessage.password!.length > 0) && <span className={styles.errorMessage}>{errorMessage.password}</span>}
        <input
          type="password"
          className={`${styles.input} ${(!passwordChecker && errorMessage.passwordChecker!.length > 0) && styles.error}`}
          placeholder="비밀번호를 한 번 더 입력해주세요."
          autoComplete="off"
          onChange={doubleCheckPassword}
        />
        {(!passwordChecker && errorMessage.passwordChecker!.length > 0) && <span className={styles.errorMessage}>{errorMessage.passwordChecker}</span>}
        <button type="button" className={styles.submitButton} onClick={handleSubmit}>회원가입</button>
      </form>
    </div>
  );
}

export default RegisterMemberPage;