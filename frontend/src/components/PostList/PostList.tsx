import { useRef, useState, useEffect, ReactNode } from 'react';

import { db, firestoreDB, storage } from '../../firebase.config';

import {
  collection,
  query,
  where,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  orderBy,
  limit,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";


import {
  ref as storageRef,
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';

import * as S from './PostList.styles';

import Post from './Post/Post';
import SkeletonPost from '../Skeleton/SkeletonPost';

interface PostListProps {
  searchTag: string;
}

const FETCH_POSTS_AMOUNT = 3;

const PostList = (props: PostListProps) => {
  const [isLike, setIsLike] = useState(false);
  const [showAddReplyButton, setShowAddReplyButton] = useState(false);

  const [posts, setPosts] = useState<ReactNode[]>([]);
  const [page, setPage] = useState<QueryDocumentSnapshot<DocumentData>>();
  const [isLoading, setIsLoading] = useState(false);
  
  const observerRef = useRef<HTMLDivElement>(null);
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

  // 최근 업데이트된 post 5개 가져오기 (페이지네이션 필수 구현 사항)
  const getRecentPost = async () => {
    setIsLoading(true);
    // 첫번째 post 컬렉션의 스냅샷을 작성날짜 기준 내림차순 (orderBy 2번째 인자 생략시 기본 내림차순)으로 정렬해 10개의 문서만 받아오기
    let queryResult;
    if (page) {
      queryResult = query(
        collection(firestoreDB, 'recentPost'),
        orderBy('postDate', 'desc'),
        startAfter(page),
        limit(FETCH_POSTS_AMOUNT),
      );
    } else {
      queryResult = query(
        collection(firestoreDB, 'recentPost'),
        orderBy('postDate', 'desc'),
        limit(FETCH_POSTS_AMOUNT),
      );
    }
    
    const documentSnapshots = await getDocs(queryResult);
    if (documentSnapshots.empty){
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
      return;
    }
    
    const newPosts = documentSnapshots.docs.map((snapshot) => {
      const data = snapshot.data();
      const postData = {
        nickname: data.nickname,
        imgList: data.imageList,
        comment: data.comment,
        tag: data.tag,
        postDate: data.postDate,
        replyList: data.replyList,
      }

      return <Post postData={postData} key={snapshot.id}/>;
    });
    
    setTimeout(() => {
      setIsLoading(false);
      setPosts([...posts, ...newPosts]);
    }, 400);

    setTimeout(() => {
      setPage(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
    }, 500);
  };

  useEffect(() => {
    getRecentPost();
  },[]);

  useEffect(() => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          getRecentPost();
          // observer.unobserve(entry.target);  // 여기에 넣으면 안되는 이유는???
        }
      }) 
    }, {
      threshold: 1
    });

    if (observerRef.current){
      io.observe(observerRef.current);
    }
    
    return () => {
      if (observerRef.current){
        io.unobserve(observerRef.current);
      }      
    }
  },[page]);

  useEffect(() => {

  }, [props.searchTag]);

  return (
    <S.Container>
      {posts}
      {isLoading && posts.length === 0 && <SkeletonPost />}
      {isLoading &&  <S.Spinner />}
      <S.Observer ref={observerRef} aria-hidden={true}/>
    </S.Container>
  );
};

export default PostList;