import React, { useEffect } from 'react';
import { db } from '../../firebase.config';
import { child, get, ref } from 'firebase/database';

interface PostProps {
  comment: string;
  imageList: string[];
  tag: string;
}


const PostPage = () => {
  useEffect(() => {
    // Post 리스트
    get(child(ref(db), 'post/'+ 'tester1')).then((snapshot) => {
      if (snapshot.exists()){
        const data = snapshot.val();
        
        for (const postDate in data) {
          data[postDate].map((post: PostProps) => {
            post.imageList[0];

            // storage에서 이미지 가져와서 렌더링 (그리드 형식)
          });
        }
      }
    });

  },[]);


  // const getRecentPost = async () => {
  //   // 첫번째 post 컬렉션의 스냅샷을 작성날짜 기준 내림차순 (orderBy 2번째 인자 생략시 기본 내림차순)으로 정렬해 10개의 문서만 받아오기
  //   const queryResult = query(
  //     collection(firestoreDB, 'recentPost'),
  //     orderBy('postDate'),
  //     startAfter(page ? page : null),
  //     limit(FETCH_POSTS_AMOUNT),
  //   );

  //   const documentSnapshots = await getDocs(queryResult);
  //   if (documentSnapshots.empty){
  //     setIsLoading(false);
  //     return;
  //   }
  //   setPage(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
    
  //   const newPosts = documentSnapshots.docs.map((snapshot) => {
  //     const data = snapshot.data();
  //     const postData = {
  //       nickname: data.nickname,
  //       imgList: data.imageList,
  //       comment: data.comment,
  //       tag: data.tag,
  //       postDate: data.postDate
  //     }
  //     return <Post postData={postData} key={snapshot.id}/>
  //   });

  //   setPosts([...posts, ...newPosts]);
  // };

  return (
    <div>
      Post Page
    </div>
  );
}
export default PostPage;