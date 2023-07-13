// import { db } from '../firebase.config';
// import { child, get, ref } from 'firebase/database';

// // 해당 유저 닉네임의 데이터를 가져오기
// export const getUserInfo = (nickname: string | undefined) => {
//   return get(child(ref(db), 'nickname/'+ nickname)).then((snapshot) => {
//     if (snapshot.exists()){
//       return snapshot.val();
//     }
//   });
// }